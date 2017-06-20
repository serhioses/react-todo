import React from 'react';
import {connect} from 'react-redux';

import todoAPI from 'todoAPI';

import Todo from 'Todo';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {todos, showCompleted, searchText} = this.props,
            renderTodos = () => {
                if (todos.length === 0) {
                    return <p className="container__message">Nothing to do</p>;
                }

                return todoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                    return <Todo key={todo.id} {...todo} />
                });
            };
        
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(TodoList);