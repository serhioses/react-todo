import moment from 'moment';

export function searchTextReducer (state = '', action) {
    switch (action.type) {
        case 'SET_SEARCH_TEXT': {
            return action.searchText;
        }
    }

    return state;
}

export function showCompletedReducer (state = false, action) {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED': {
            return !state;
        }
    }

    return state;
}

export function todosReducer (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                action.todo
            ];
        }
        case 'ADD_TODOS': {
            return [
                ...state,
                ...action.todos
            ];
        }
        // case 'TOGGLE_TODO': {
        //     return state.map((todo) => {
        //         var nextCompleted;

        //         if (todo.id === action.id) {
        //             nextCompleted = !todo.completed;
                    
        //             return {
        //                 ...todo,
        //                 completed: nextCompleted,
        //                 completedAt: nextCompleted ? moment().unix() : null
        //             };
        //         }

        //         return todo;
        //     });
        // }
        case 'UPDATE_TODO': {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates
                    };
                }

                return todo;
            });
        }
    }

    return state;
}
