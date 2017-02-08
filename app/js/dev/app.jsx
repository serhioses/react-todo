import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';

// Load foundation
import 'style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// App css
import 'style!css!applicationStyles';

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);