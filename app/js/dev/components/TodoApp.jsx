import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import todoAPI from 'todoAPI';

import moment from 'moment';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };

        // this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        todoAPI.setTodos(this.state.todos);
    }
    // handleAddTodo(text) {
    //     this.setState({
    //         todos: [
    //             ...this.state.todos,
    //             {
    //                 id: Date.now() * Math.random(),
    //                 text: text,
    //                 completed: false,
    //                 createdAt: Date.now() / 1000,
    //                 completedAt: null
    //             },
    //         ]
    //     });
    // }
    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    render() {
        var {todos, showCompleted, searchText} = this.state,
            filteredTodos = todoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}