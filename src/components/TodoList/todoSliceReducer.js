// const initState = [
//     {
//         id: '1', name: 'Quan',
//         prioriry: 'Medium',
//         completed: true,
//     },
//     {
//         id: '2', name: 'Van',
//         prioriry: 'Medium',
//         completed: false,
//     },
//     {
//         id: '3', name: 'Dinh',
//         prioriry: 'Medium',
//         completed: false,
//     }
// ]


// const todoReducer = (state = initState, action) => {
//     console.log(action);
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [
//                 ...state, action.payload
//             ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//         default:
//             return state
//     }
// }

// export default todoReducer   redux core

import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todoList',
    initialState: [
        {
            id: '1', name: 'Quan',
            prioriry: 'Medium',
            completed: true,
        },
        {
            id: '2', name: 'Van',
            prioriry: 'Medium',
            completed: false,
        },
        {
            id: '3', name: 'Dinh',
            prioriry: 'Medium',
            completed: false,
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }
})