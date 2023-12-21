import React from 'react'
import TodoSpred from './TodoSpred'

const Todo = ({todos,removeTodo, toggleChange}) => {
  return (
    <div>
        {todos.map(todo=>{
            return <TodoSpred {...todo} removeTodo={removeTodo} toggleChange={toggleChange} key={todo.id} />
        })}
    </div>
  )
}

export default Todo