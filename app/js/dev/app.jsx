import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';

// Load foundation
import 'style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// App css
import 'style!css!applicationStyles';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            
        </Route>
    </Router>,
    document.getElementById('app')
);