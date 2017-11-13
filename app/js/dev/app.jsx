import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';

import todoAPI from 'todoAPI';

import * as actions from 'actions';
import {firebaseRef} from 'app/js/dev/firebase/';
import configureStore from 'configureStore';

// import './../../../playground/firebase';

var store = configureStore();
    // initialTodos = todoAPI.getTodos();

// store.subscribe(() => {
//     var state = store.getState();

//     console.log(state);

//     todoAPI.setTodos(state.todos);
// });
// firebaseRef.child('todos').once('value').then((todos) => {
//   if (todos.val()) {
//     let dbTodos = Object.keys(todos.val()).map((id) => {
//       return {
//         ...todos.val()[id],
//         id
//       };
//     });
//     store.dispatch(actions.addTodos(dbTodos));
//   }
// });
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load foundation
import 'style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// App css
import 'style!css!applicationStyles';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={Login} />
                <Route path="todos" component={TodoApp} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);