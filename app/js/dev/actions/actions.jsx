import firebase, {firebaseRef} from 'app/js/dev/firebase/';

export function setSearchText (searchText) {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
}

export function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        todo
    };
}

export function startAddTodo (text) {
    return (dispatch, getState) => {
        var todo, todoRef;

        todo = {
            text,
            completed: false,
            createdAt: Date.now() / 1000,
            completedAt: null
        };
        todoRef = firebaseRef.child('todos').push(todo);
        
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
}

export function addTodos (todos) {
    return {
        type: 'ADD_TODOS',
        todos
    };
}

export function toggleShowCompleted () {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
}

export function toggleTodo (id) {
    return {
        type: 'TOGGLE_TODO',
        id
    };
}
