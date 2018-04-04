import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer, {
    lists: [
        [{value: '', isText: true}],
        [{value: '', isText: true}]
    ]
});

export default store;