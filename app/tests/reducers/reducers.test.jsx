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
            var todo, action, response;

            todo = {
                id: 1,
                text: 'Some text',
                completed: false,
                createdAt: Date.now() / 1000,
                completedAt: null
            };
            action = {
               type: 'ADD_TODO',
               todo
            };
            response = reducers.todosReducer(df([]), df(action));

            expect(response.length).toBe(1);
            expect(response[0].text).toEqual('Some text');
            expect(response[0]).toEqual(todo);
        });
        it('should add new todos', () => {
            var todos = [{
                id: '564',
                text: 'sdfjhsldjfh',
                completed: false,
                completedAt: null,
                createdAt: 544554
            }],
                action = {
                type: 'ADD_TODOS',
                todos
            },
                response = reducers.todosReducer(df([]), df(action));

            expect(response.length).toBe(1);
            expect(response[0]).toEqual(todos[0]);
        });
        it('should update todo', () => {
            var action, todos, updates, response, text;

            text = 'Feed the cat';
            todos = [
                {
                    id: '54654654654',
                    text,
                    completed: false,
                    completedAt: null,
                    createdAt: 544554
                }
            ];
            updates = {
                completed: true,
                completedAt: 654654654654
            };
            action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };

            response = reducers.todosReducer(df(todos), df(action));

            expect(response.length).toBe(1);
            expect(response[0].text).toBe(text);
            expect(response[0].completed).toBe(updates.completed);
            expect(response[0].completedAt).toBe(updates.completedAt);
            expect(response[0].completedAt).toNotBe(null);
        });
    });
});