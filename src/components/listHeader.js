import React from 'react';

class ListHeader extends React.Component{
    render() {
        return (
            <div className="listHeader" >
                  <h1>List  {this.props.count}</h1>
            </div>
        )
    }
};

export default ListHeader;