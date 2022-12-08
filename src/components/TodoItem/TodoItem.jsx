import React, { useState } from 'react'
import style from './TodoItem.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { remove } from '../../redux/actions'

export default function TodoItem(props, removeTodo) {
    const dispatch = useDispatch()

    return (
        <div className={style.todoItem}>
            <div className={props.check ? style.todoStartChecked : style.todoStart}>
                <input type="checkbox" onClick={props.checkHandle} />
                <h4 className={style.todoStart__title}>{props.todo.title}</h4>
            </div>
            <div className={style.todoEnd}>
                <button onClick={removeTodo}><FaTrashAlt /></button>
            </div>

        </div >
    )
}
