import React from 'react';
import {connect} from 'react-redux';
import ListMainBoard from './listMainBoard';

class Content extends React.Component{
    render() {
        return (
            <div className="content">
                {this.props.lists.map(function(item, i){
                        return <ListMainBoard key={i} count={i + 1} listID={i} />
                    })
                }
            </div>
        )
    }
};
export default connect(
    (store) => {return {lists: store.lists};}
)(Content);