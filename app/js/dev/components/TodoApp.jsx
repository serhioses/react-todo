import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import todoAPI from 'todoAPI';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        todoAPI.setTodos(this.state.todos);
    }
    handleToggle(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    }
    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: Date.now() * Math.random(),
                    text: text,
                    completed: false
                },
            ]
        });
    }
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
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
}