// import moment from 'moment';

// import todoAPI from 'todoAPI';

// var defaultState = {
//     todos: todoAPI.getTodos(),
//     showCompleted: false,
//     searchText: ''
// };

// export function reducer (state, action) {
//     var state = state || deafultState,
//         updatedTodos;

//     switch(action.type) {
//         case 'ADD_TODO': {
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         id: Date.now() * Math.random(),
//                         text: action.text,
//                         completed: false,
//                         createdAt: Date.now() / 1000,
//                         completedAt: null
//                     }
//                 ]
//             };
//         }
//         case 'TOGGLE_TODO': {
//             updatedTodos = state.todos.map((todo) => {
//                 if (todo.id === action.id) {
//                     todo.completed = !todo.completed;

//                     todo.completedAt = todo.completed ? moment().unix() : null;
//                 }
//                 return todo;
//             });

//             return {
//                 ...state,
//                 todos: updatedTodos
//             };
//         }
//         case: 'SEARCH': {
            
//         }
//     }

//     return state;
// }
