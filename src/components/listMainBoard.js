import React from 'react';
import {connect} from 'react-redux';
import ListHeader from './listHeader';
import ListingBoard from './listingBoard';

class ListMainBoard extends React.Component{
    render() {
        return (
            <div className="listMainBoard">
                <ListHeader count={this.props.count} />
                <ListingBoard listID={this.props.listID} />
            </div>
        )
    }
};

export default connect(
    (store) => {return {lists: store.lists};}
)(ListMainBoard);