import React from 'react'
import './index.css'
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';

const TodoSpred = ({ id, title, status, removeTodo, toggleChange }) => {
    return (
        <div className='todoStyle'>
            <div className="title-checkbox">
                <input type="checkbox" checked={status} onChange={(e) => {
                    toggleChange(id)
                    if (!status) {
                        toast.success("Done",{autoClose:1000,theme:'colored'})
                    }else{
                        toast.warning("Not done",{autoClose:1000,theme:'colored'})
                    }
                }} />
                <p className={`${status ? "lineThrough" : ""}`}>Title:  {title}</p>
            </div>
            <div className='remove' onClick={(e) => {
                removeTodo(id)
                toast.error("Removed",{autoClose:1000,theme:'colored'})
            }} ><ImCross /></div>
        </div>
    )
}

export default TodoSpred