import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/model';
import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false }])
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Briran's To Do List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>

    </div>
  )
}

export default App
