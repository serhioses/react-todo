import firebase, {firebaseRef, githubProvider} from 'app/js/dev/firebase/';
import moment from 'moment';

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

export function startAddTodos () {
    return (dispatch, getState) => {
        return firebaseRef.child('todos').once('value', (snapshot) => {
            dispatch(addTodos(
                Object.keys(snapshot.val() || {}).map((id) => ({...snapshot.val()[id], id}))
            ));
        });
    };
}

export function toggleShowCompleted () {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
}

export function updateTodo (id, updates) {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
}

export function startUpdateTodo (id, completed) {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`),
            updates = {
                completed,
                completedAt: completed ? moment().unix() : null
            };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
}

export function startLogin () {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider)
            .then((result) => {
                console.log('Auth success: ', result);
            }, (err) => {
                console.log('Auth error: ', err);
            });
    };
};
export function startLogout () {
    return (dispatch, getState) => {
        return firebase.auth().signOut()
            .then(() => {
                console.log('Logged out');
            });
    };
};
