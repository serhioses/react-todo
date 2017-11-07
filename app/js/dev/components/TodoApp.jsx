import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
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