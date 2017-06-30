import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData, action, spy, todo, el;

        todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        };
        action = actions.startUpdateTodo(todoData.id, !todoData.completed);
        spy = expect.createSpy();
        todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click(el[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
});