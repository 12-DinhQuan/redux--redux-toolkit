import { createSelector } from "reselect"


export const todoListSelector = (state) => state.todoList
export const seachTextSelector = (state) => state.filters.seach
export const statusFilterSelector = (state) => state.filters.status
export const prioritiesFilterSelector = (state) => state.filters.priorires

export const todoRemainingSelector = createSelector(
    todoListSelector,
    seachTextSelector,
    statusFilterSelector,
    prioritiesFilterSelector,
    (todoList, seachText, status, priorires) => {
        return todoList.filter(todo => {
            if (status === 'All') {
                return priorires.length ? todo.name.includes(seachText) && priorires.includes(todo.prioriry) : todo.name.includes(seachText)
            }
            return (
                todo.name.includes(seachText) && (
                    status === 'Completed' ? todo.completed : !todo.completed
                ) && (priorires.length ? priorires.includes(todo.prioriry) : true)
            )
        })
    })