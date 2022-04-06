// import { createStore } from 'redux'

// import rootReducer from './reducer'


// const store = createStore(rootReducer)

// export default store

import { configureStore } from '@reduxjs/toolkit'

import { filterSlice } from '../components/Filters/filterSliceReduser'
import { todosSlice } from '../components/TodoList/todoSliceReducer'


const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todosSlice.reducer,
    }
})

export default store