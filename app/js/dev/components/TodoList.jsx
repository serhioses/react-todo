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
                // var nonCompletedTodosCount = todos.reduce((sum, current) => {
                //     return sum + ((current.completed && !showCompleted) ? 0 : 1);
                // }, 0);
                var filteredTodos = todoAPI.filterTodos(todos, showCompleted, searchText);

                if (!filteredTodos.length) {
                    return <p className="container__message">Nothing to do</p>;
                }

                return filteredTodos.map((todo) => {
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