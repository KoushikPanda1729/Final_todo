import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid'

const TodoForm = ({ addNewTodo }) => {
    const [todoFormInput, setTodoFormInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoFormInput.trim().length === 0) {
            toast.error("please fill input", { autoClose: 1000, theme: 'colored' })
            return;
        } else {
            toast.success("Added", { autoClose: 1000, theme: 'colored' })
        }

        const newTodo = {
            id: uuid(),
            title: todoFormInput,
            status: false
        }

        addNewTodo(newTodo)
        setTodoFormInput("")
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='todoForm'>
                    <input type="text" name="" id="" value={todoFormInput} onChange={(e) => (setTodoFormInput(e.target.value))} />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm