import * as types from './actionTypes'

export const addTodo = (title) => ({
    type: types.ADD_TODO,
    payload: title,
})

export const remove = (id) => ({
    type: types.REMOVE,
    payload: id,
})

export const searchTodo = (e) => ({
    type: types.SEARCH_TODO,
    payload: e.target.value
})

export const changeTodo = (value) => ({
    type: types.CHANGE_TODO,
    payload: value
})