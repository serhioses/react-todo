import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from 'reducers';

describe('Reducers', () => {
    describe('Search text reducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            },
                response = reducers.searchTextReducer(df(''), df(action));

            expect(response).toEqual(action.searchText);
        });
    });
    describe('Show completed reducer', () => {
        it('should flip showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            },
                response = reducers.showCompletedReducer(df(true), df(action));

            expect(response).toBe(false);
        });
    });
    describe('Todos reducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            },
                response = reducers.todosReducer(df([]), df(action));

            expect(response.length).toBe(1);
            expect(response[0].text).toEqual(action.text);
        });
        it('should toggle todo', () => {
            var action, todos, response;

            todos = reducers.todosReducer([], {
                type: 'ADD_TODO',
                text: 'Walk the cat'
            });
            action = {
                type: 'TOGGLE_TODO',
                id: todos[0].id
            };

            response = reducers.todosReducer(df(todos), df(action));

            expect(response.length).toBe(1);
            expect(response[0].text).toBe('Walk the cat');
            expect(response[0].completed).toBe(true);
            expect(response[0].completedAt).toNotBe(null);
        });
    });
});