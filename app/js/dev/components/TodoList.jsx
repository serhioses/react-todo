import React from 'react';

import Todo from 'Todo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {todos} = this.props,
            renderTodos = () => {
                if (todos.length === 0) {
                    return <p className="container__message">Nothing to do</p>;
                }

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