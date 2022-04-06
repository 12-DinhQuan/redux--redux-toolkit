
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const seachFilter = text => {
    return {
        type: 'filters/seachFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (prioriry) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: prioriry
    }
}