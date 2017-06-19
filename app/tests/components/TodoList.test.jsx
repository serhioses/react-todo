import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import configureStore from 'configureStore';

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something',
                completed: false,
                completedAt: null,
                createdAt: 500
            },
            {
                id: 2,
                text: 'Check mail',
                completed: false,
                completedAt: null,
                createdAt: 500
            }
        ],
            store = configureStore({
                todos
            }),
            provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTodoList/></Provider>),
            todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0],
            todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        var todos = [],
            todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>),
            el = ReactDOM.findDOMNode(todoList);

        expect($(el).find('.container__message').length).toBe(1);
    });
});