import React from 'react';
import * as redux from 'react-redux';

import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    onLogout(e) {
        e.preventDefault();

        this.props.dispatch(actions.startLogout());
    }

    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="/" onClick={(e) => this.onLogout(e)}>Logout</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="grid-container grid-x">
                    <div className="cell small-11 medium-6 large-5" style={{margin: '0 auto'}}>
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default redux.connect()(TodoApp);
