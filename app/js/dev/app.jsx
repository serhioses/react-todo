import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from 'TodoApp';

import todoAPI from 'todoAPI';

import * as actions from 'actions';
import configureStore from 'configureStore';

var store = configureStore(),
    initialTodos = todoAPI.getTodos();

store.subscribe(() => {
    var state = store.getState();

    console.log(state);

    todoAPI.setTodos(state.todos);
});

store.dispatch(actions.addTodos(initialTodos));

// Load foundation
import 'style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// App css
import 'style!css!applicationStyles';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);