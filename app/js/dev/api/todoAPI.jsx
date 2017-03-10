var todoAPI = {
    setTodos: function (todos) {
        if (!$.isArray(todos)) {
            return;
        }

        localStorage.setItem('todos', JSON.stringify(todos));

        return todos;
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos'),
            todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (err) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        filteredTodos = filteredTodos.filter((todo) => {
            return todo.text.toLowerCase().indexOf(searchText) !== -1 || searchText === '';
        });

        filteredTodos.sort((a, b) => {
            return a.completed && !b.completed ? 1 : !a.completed && b.completed ? -1 : 0;
        });

        return filteredTodos;
    }
};

export default todoAPI;