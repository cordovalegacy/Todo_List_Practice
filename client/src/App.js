import {useState} from 'react'
import './App.css';
import Display from './components/display';
import Form from './components/form';

function App() {

  const [todoList, setTodoList] = useState([
    {task: "create a task!", completed: false}
  ])

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
