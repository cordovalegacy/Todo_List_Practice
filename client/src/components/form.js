import {useState} from 'react'

const Form = (props) => {

    const {todoList, setTodoList} = props
    const [todo, setTodo] = useState("")

    const changeHandler = (e) => {
        setTodo(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setTodoList([...todoList , {task: todo, completed: false}])
    }

    return(
        <form onSubmit={submitHandler}>
            <h1>This is our task list</h1>
            <label htmlFor='task'>Task: </label>
            <input type="text" name="task" onChange={changeHandler} />
            <input type="submit" value="Post Task" />
        </form>
    )
}

export default Form