import React from 'react';
import store from '../store/store'
import {connect} from 'react-redux';

class ListingBoard extends React.Component{
    changeItem(listId){

        const inputBlur = this.inputBlur.bind(this);
        if(this.props.lists[this.props.listID].length == 1){
            store.dispatch({
                type: 'FIRST_ITEM_CHAGE_TO_INPUT',
                payload: {
                    itemValue: <input type={'text'}   defaultValue={listId[2]} autoFocus onBlur={(e) =>{inputBlur.call(null, listId, e)}} />,
                    itemInfo: listId
                }
            })
        }
        else if(this.props.lists[this.props.listID].length > 1 && (listId[1] +1) == this.props.lists[this.props.listID].length){
            store.dispatch({
                type: 'LAST_ITEM_CHAGE_TO_INPUT',
                payload: {
                    itemValue: <input type={'text'}   defaultValue={listId[2]} autoFocus onBlur={(e) =>{inputBlur.call(null, listId, e)}} />,
                    itemInfo: listId
                }
            })
        }
        else{
            store.dispatch({
                type: 'ITEM_CHAGE_TO_INPUT',
                payload: {
                    itemValue: <input type={'text'} defaultValue={listId[2]} autoFocus onBlur={(e) =>{inputBlur.call(null, listId, e)}} />,
                    itemInfo: listId
                }
            })
        }
    };
    inputBlur(listId, event){
        const itemValue =  event.target.value;
        if(this.props.lists[this.props.listID].length == 2 && itemValue === ''){
            store.dispatch({
                type: 'FIRST_ITEM_CHAGE_TO_TEXT',
                payload: {
                    itemInfo: listId
                }
            })
        }
        else if(this.props.lists[this.props.listID].length  > 1 && itemValue === ''){
            store.dispatch({
                type: 'MIDLLE_ITEM_CHAGE_TO_TEXT',
                payload: {
                    itemInfo: listId
                }
            })
        }
        else{
            store.dispatch({
                type: 'ITEM_CHAGE_TO_ITEM',
                payload: {
                    itemValue: itemValue,
                    itemInfo: listId
                }
            })
        }
    }

    render() {

        const listID = this.props.listID;
        return (
            <div className="listingBoard" >
                <ol>
                    {this.props.lists[this.props.listID].map((item, i) => {
                        return <li key={i}   onClick={this.changeItem.bind(this, [listID, i, item])} >{item}</li>
                    })}
                </ol>
            </div>
        )
    }
};
export default connect(
    (store) => {return {lists: store.lists};}
)(ListingBoard);