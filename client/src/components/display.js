import { useState } from 'react'

const Display = (props) => {

    const { todoList, setTodoList } = props

    console.log(Array.isArray(todoList))

    const deleteHandler = (taskFromMap) => {
        setTodoList(todoList.filter((allTasks) => taskFromMap !== allTasks))
    }

    const checkHandler = (taskFromMap) => {
        taskFromMap.completed = !taskFromMap.completed
        setTodoList([...todoList])
    }

    return (
        <div>
            <h1>Hello World</h1>
            {todoList.map((item, idx) => {
                return (
                    <div className='flex-container' key={idx}>
                        <input type="checkbox" onClick={() => checkHandler(item)} />
                        {item.completed == true ? <p style={{textDecoration: "line-through"}}>{item.task}</p> : <p>{item.task}</p>}
                        <button onClick={() => deleteHandler(item)}>Delete</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Display