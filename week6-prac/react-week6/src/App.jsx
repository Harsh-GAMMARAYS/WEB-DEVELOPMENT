// import React, {Fragment} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react"

  function App(){
    const [todos, setTodo] = useState([{
      id: 1,
      title: "go to gym",
      description:"dasfafsf"
  }, {
    id: 2,
      title: "go to gym",
      description:"dasfafsf"
  },{
    id: 3,
      title: "go to gym",
      description:"dasfafsf"
  }])

  const addTodo = () => {
    setTodo([...todos, {
      id:4,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
    {todos.map(todo => <Todo title ={todo.title} description={todo.description} />)}
    </div>
  )
}


const Todo = ({title, description}) => {
  return <div>
    <h1>
    {title}
    </h1>

    <h5>
      {description}
    </h5>
  </div>
}

export default App
