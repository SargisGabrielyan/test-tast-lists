import React from 'react';
import {connect} from 'react-redux';
import Content from './content';

class App extends React.Component{
    render() {
        return (
            <div>
                <Content />
            </div>
        )
    }
};

export default App;

