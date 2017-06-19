import * as redux from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/reducers';

export default (function () {
    var store;

    return function configure () {
        var reducer;

        if (store) {
            return store;
        }

        reducer = redux.combineReducers({
            searchText: searchTextReducer,
            showCompleted: showCompletedReducer,
            todos: todosReducer
        });

        store = redux.createStore(reducer, redux.compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));

        return store;
    };
}())
