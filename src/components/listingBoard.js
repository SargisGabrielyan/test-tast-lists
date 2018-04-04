import React from 'react';
import store from '../store/store'
import {connect} from 'react-redux';

class ListingBoard extends React.Component{
    changeItem(listId){
        if(this.props.lists[listId[0]].length == 1){
            store.dispatch({
                type: 'FIRST_ITEM_CHAGE_TO_INPUT',
                payload: {
                    itemValue: false,
                    itemInfo: listId
                }
            })
        }
        else if(this.props.lists[listId[0]].length > 1 && (listId[1] +1) == this.props.lists[listId[0]].length){
            store.dispatch({
                type: 'LAST_ITEM_CHAGE_TO_INPUT',
                payload: {
                    itemValue: false,
                    itemInfo: listId
                }
            })
        }
        else{
            store.dispatch({
                type: 'ITEM_CHAGE_TO_INPUT',
                payload: {
                    itemValue: false,
                    itemInfo: listId
                }
            })
        }
    };
    inputBlur(listId){
        const itemValue =  listId[3].target.value;
        if(this.props.lists[listId[0]].length == 2 && itemValue === ''){
            store.dispatch({
                type: 'FIRST_ITEM_CHAGE_TO_TEXT',
                payload: {
                    itemInfo: listId,
                    isText: true
                }
            })
        }
        else if(this.props.lists[listId[0]].length  > 1 && itemValue === ''){
            store.dispatch({
                type: 'MIDLLE_ITEM_CHAGE_TO_TEXT',
                payload: {
                    itemInfo: listId,
                    isText: true
                }
            })
        }
        else{
            store.dispatch({
                type: 'ITEM_CHAGE_TO_ITEM',
                payload: {
                    itemValue: itemValue,
                    itemInfo: listId,
                    isText: true
                }
            })
        }
    }

    render() {
        const listId = this.props.listId;
        const list = this.props.list;
        const inputBlur = this.inputBlur.bind(this);
        return (
            <div className="listingBoard" >
                <ol>
                    {list.map((item, i) => {
                        if(item.isText == true){
                            return <li key={i}   onClick={this.changeItem.bind(this, [listId, i, item])} >{item.value}</li>
                        }
                        else{
                            return <li key={i}><input type={'text'} defaultValue={item.value} autoFocus onBlur={(e) =>{inputBlur.call(this, [listId,  i, item, e])}} /></li>
                        }
                    })}
                </ol>
            </div>
        )
    }
};
export default connect(
    (store) => {return {lists: store.lists};}
)(ListingBoard);