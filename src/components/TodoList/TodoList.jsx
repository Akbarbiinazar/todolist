import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({ filteredTodos, todos, removeTodo, check, checkHandle }) {

  return (
    <div>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} removeTodo={removeTodo} todos={todos} todo={todo} check={check} checkHandle={checkHandle} />
      ))}
    </div>
  )
}
