import React from 'react';
import ListHeader from './listHeader';
import ListingBoard from './listingBoard';

class ListMainBoard extends React.Component{
    render() {
        return (
            <div className="listMainBoard">
                <ListHeader count={this.props.count} />
                <ListingBoard listId={this.props.listId} list={this.props.list}/>
            </div>
        )
    }
};

export default ListMainBoard;