import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if the value is not empty', () => {
        var spy = expect.createSpy(),
            addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
            el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.title.value = 'test todo';
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('test todo');
    });

    it('should not call onAddTodo if the value is empty', () => {
        var spy = expect.createSpy(),
            addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
            el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.title.value = '';
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});