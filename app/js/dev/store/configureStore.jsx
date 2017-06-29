import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/reducers';

export default (function () {
    var store;

    return function configure (initialState = {}) {
        var reducer;

        if (store) {
            return store;
        }

        reducer = redux.combineReducers({
            searchText: searchTextReducer,
            showCompleted: showCompletedReducer,
            todos: todosReducer
        });

        store = redux.createStore(reducer, initialState, redux.compose(
            redux.applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));

        return store;
    };
}())
