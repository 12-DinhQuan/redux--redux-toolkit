// const initState = {
//     seach: '',
//     status: 'All',
//     priorires: []
// }


// const filtersReducer = (state = initState, action) => {
//     console.log(action);
//     switch (action.type) {
//         case 'filters/seachFilterChange':
//             return {
//                 ...state,
//                 seach: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priorires: action.payload
//             }
//         default:
//             return state
//     }
// }

// export default filtersReducer   redux core

import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        seach: '',
        status: 'All',
        priorires: []
    },
    reducers: {
        seachFilterChange: (state, action) => {
            state.seach = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priorires = action.payload
        },

    }
})