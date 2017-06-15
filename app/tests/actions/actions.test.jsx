import expect from 'expect';

import * as actions from 'actions';

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        },
            response = actions.setSearchText(action.searchText);

        expect(response).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Something to do'
        },
            response = actions.addTodo(action.text);

        expect(response).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        },
            response = actions.toggleShowCompleted();

        expect(response).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        },
            response = actions.toggleTodo(action.id);

        expect(response).toEqual(action);
    });
});