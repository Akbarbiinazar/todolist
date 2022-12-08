import React, { useState } from 'react'
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeTodo } from './redux/actions';


function App() {
  const [todos, setTodos] = useState([
  ])
  const [title, setTitle] = useState('')
  const [check, setCheck] = useState(false)
  let [checked, setChecked] = useState(0)
  const [filter, setFilter] = useState('')

  // const dispatch = useDispatch()
  // const title = useSelector(state => state.title)

  const checkHandle = (e) => {
    if (e.target.checked) {
      setChecked(checked += 1)
    } else {
      // setChecked(checked -= 1)
    }
    console.log(checked)
    setCheck(current => !e.target.value)
  }
  const createTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      title,
    }
    setTodos([...todos, newTodo])
    setTitle('')
  }

  const removeTodo = todo => {
    setTodos([...todos].filter(todoItem => todoItem.id !== todo.id))
  }

  const inputChange = (e) => {
    setTitle(e.target.value)
    // const title = e.target.value
    // dispatch(addTodo(e.target.value))
  }

  const filteredTodos = todos.filter(todo => {
    return todo.title.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div className="container">
      <div className="todo">
        <div className="todo__wrapper">
          <h1 className='todo__title'>TODOLIST</h1>
          <div className="todo__add">
            <form action="" >
              <input
                className='todo__input'
                onChange={inputChange}
                value={title}
                type="text"
                placeholder='Add todo task' />
              <button className='btn' onClick={createTodo}><FaPlus /> Add</button>
            </form>
            <hr />
          </div>
          <div className="todo__search">
            <input
              type="text"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              placeholder='Search todo'
              className='todo__searching' />
          </div>
          <TodoList filteredTodos={filteredTodos} checkHandle={checkHandle} removeTodo={removeTodo} />
          <div className="todo__total">
            <div className="total__done">
              <p>Total done: <span>{checked}</span></p>
            </div>
            <div className="total__undone">
              <p>Total undone: <span>3</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
