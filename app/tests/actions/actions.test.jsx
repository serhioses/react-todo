import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'actions';
import firebase, {firebaseRef} from 'app/js/dev/firebase/';

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

    it('should generate update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 1,
            updates: {}
        },
            response = actions.updateTodo(action.id, {});

        expect(response).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        var testTodoRef;

        beforeEach((done) => {
            var todosRef = firebaseRef.child('todos');

            todosRef.remove().then(() => {
                testTodoRef = firebaseRef.child('todos').push();

                return testTodoRef.set({
                    text: 'Something to do',
                    completed: false,
                    createdAt: 45454
                });
            }).then(() => done()).catch(done);

            
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({}),
                action = actions.startUpdateTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });

        it('should get firebaseRef todos and dispatch ADD_TODOS action', (done) => {
            const store = createMockStore({}),
                action = actions.startAddTodos();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'ADD_TODOS'
                });
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions[0].todos[0].text).toEqual('Something to do');

                done();
            }, done);
        });
    });
});