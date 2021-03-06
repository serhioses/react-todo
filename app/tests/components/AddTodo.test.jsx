import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import * as actions from 'actions';
import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO if the value is not empty', () => {
        var spy = expect.createSpy(),
            todoText = 'test todo',
            action = actions.startAddTodo(todoText),
            addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
            el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.title.value = todoText;
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO if the value is empty', () => {
        var spy = expect.createSpy(),
            addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
            el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.title.value = '';
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});