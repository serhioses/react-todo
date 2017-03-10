import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Todo from 'Todo';
import TodoList from 'TodoList';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something'
            },
            {
                id: 2,
                text: 'Check mail'
            }
        ],
            todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>),
            todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        var todos = [],
            todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>),
            el = ReactDOM.findDOMNode(todoList);

        expect($(el).find('.container__message').length).toBe(1);
    });
});