import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from 'TodoApp';

import * as actions from 'actions';
import configureStore from 'configureStore';

var store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(actions.addTodo('Clear the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

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