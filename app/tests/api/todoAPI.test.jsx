import expect from 'expect';

import todoAPI from 'todoAPI';

describe('todoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(todoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{id: 122, text: 'Simple todo', completed: false}],
                actualTodos;

            todoAPI.setTodos(todos);

            actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};

            todoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return an empty array for bad localStorage data', () => {
            var actualTodos = todoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            var todos = [{id: 122, text: 'Simple todo', completed: false}],
                actualTodos;

            localStorage.setItem('todos', JSON.stringify(todos));

            actualTodos = todoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'Some text here',
                completed: true
            },
            {
                id: 2,
                text: 'Other text here',
                completed: false
            },
            {
                id: 3,
                text: 'Some text here',
                completed: true
            }
        ];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = todoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return only incompleted items if showCompleted is false', () => {
            var filteredTodos = todoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = todoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should return all todos if searchText is empty', () => {
            var filteredTodos = todoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should filter todos by searchText', () => {
            var filteredTodos = todoAPI.filterTodos(todos, true, 'some');

            expect(filteredTodos.length).toBe(2);
        });
    });
});