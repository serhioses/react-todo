import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import configureStore from 'configureStore';
import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    it('should render todoList', () => {
        var store = configureStore(),
            provider = TestUtils.renderIntoDocument(<Provider store={store}><TodoApp/></Provider>),
            todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0],
            todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toBe(1);
    });
});