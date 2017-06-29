import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: '111',
                text: 'Walk the dog',
                completed: false,
                completedAt: null,
                createdAt: 3000
            }
        },
            response = actions.addTodo(action.todo);

        expect(response).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({}),
            todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();

            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate add todos action object', () => {
        var todos = [{
            id: '111',
            text: 's;dkljf;sjkd',
            completed: false,
            completedAt: null,
            createdAt: 3000
        }],
            action = {
                type: 'ADD_TODOS',
                todos
            },
            response = actions.addTodos(todos);

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