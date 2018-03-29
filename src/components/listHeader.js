import React from 'react';
import {connect} from 'react-redux';

class ListHeader extends React.Component{
    render() {
        return (
            <div className="listHeader" >
                  <h1>List  {this.props.count}</h1>
            </div>
        )
    }
};



export default connect(
    (store) => {return {listCount: store.listCount};}
)(ListHeader);