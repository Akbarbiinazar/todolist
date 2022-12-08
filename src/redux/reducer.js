import * as types from './actionTypes'

const initialState = {
    totalDone: 0,
    totalUndone: 0,
    filter: '',
    todos: [],
    title: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case types.REMOVE:
            return {
                ...state, todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        case types.SEARCH_TODO:
            return {
                ...state, todos: state.todos.filter(todo => {
                    return todo.title.toLowerCase().includes(state.filter.toLowerCase())
                })
            }
        case types.CHANGE_TODO:
            return {
                ...state, todos: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;