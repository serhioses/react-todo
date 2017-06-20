import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        var spy = expect.createSpy(),
            todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>),
            searchText = 'Dog';

        todoSearch.refs.searchText.value = searchText;

        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith({
            type: 'SET_SEARCH_TEXT',
            searchText
        });
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED on checked change', () => {
        var spy = expect.createSpy(),
            todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>),
            showCompleted = true;

        todoSearch.refs.showCompleted.checked = showCompleted;

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_SHOW_COMPLETED'
        });
    });
});