import React from 'react';

import Todo from 'Todo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {todos} = this.props,
            renderTodos = () => {
                return todos.map((todo) => {
                    return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
                });
            };
        
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}