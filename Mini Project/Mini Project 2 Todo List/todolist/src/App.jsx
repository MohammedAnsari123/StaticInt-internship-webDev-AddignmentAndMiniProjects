import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [updateIndex, setUpdateIndex] = useState({
    index: -1,
    value: ''
  })

  const [updateValue, setUpdateValue] = useState('')

  const handleClick = () => {
    if(newTodo.trim() === '') return
    let newTodoArray = todoList
    newTodoArray.push(newTodo)
    setTodoList(newTodoArray)
    setNewTodo('')
  }

  return (
    <>
      <h1>My Todo List</h1>
      <ul>
        {(todoList.length > 0) ? todoList.map((todo, index) => {
          return <li>{index + 1}. {todo}</li>
        }) : (<p>No Todo's avaiable</p>)}
      </ul>
      <input type="text" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
      <p>{newTodo}</p>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
