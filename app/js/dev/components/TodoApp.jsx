import React from 'react';

import TodoList from 'TodoList';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                }
            ]
        };
    }
    render() {
        var {todos} = this.state;

        return (
            <div>
                <p>TodoApp.jsx rendered.</p>
                <TodoList todos={todos}/>
            </div>
        );
    }
}