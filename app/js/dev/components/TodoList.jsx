import React from 'react';

import Todo from 'Todo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {todos} = this.props;

        function renderTodos () {
            return todos.map(function (todo) {
                return <Todo key={todo.id} {...todo} />
            });
        }
        
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}