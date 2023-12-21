
import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './TodoForm';
import Todo from './Todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getLocalTodo = () => {
  let todo = localStorage.getItem('todo')

  if (todo) {
    return JSON.parse(localStorage.getItem('todo'))
  }else{
    return [];
  }
}

function App() {

  const [todos, setTodos] = useState(getLocalTodo());

  const addNewTodo = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo]
    })
  }

  const toggleChange = (id) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status }
        } else {
          return todo;
        }
      })
    })
  }

  const removeTodo = (id) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id)
    })
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

  return (
    <div className='container'>
      <h1 className='heading'>Todo App by koushik</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <Todo todos={todos} removeTodo={removeTodo} toggleChange={toggleChange} />
      <ToastContainer />
    </div>
  )
}

export default App
