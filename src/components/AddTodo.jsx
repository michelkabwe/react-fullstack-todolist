import React, { useState } from 'react'
import TodoList from './TodoList.jsx'

const AddTodo = () => {

    const [newTodo, setNewTodo] = useState('')
    const [list, setList] = useState([]);


  

    const handleSubmit = () => {

            const todoItem = {
                id:Math.floor(Math.random() * 10000),
                value:newTodo
            }
            console.log(todoItem)
            console.log(list)

           
            if(todoItem){
                setList([...list,todoItem]) 
                setNewTodo('') 
            
               
            }
            /*gets the oldlist and whats inside of it and adds the new item */
    
    }
   



    return (
        <div className="input_container">
             <form onSubmit={(e) => e.preventDefault()}>
                <input type="text"
                onChange={e => setNewTodo(e.target.value)}
                className="todo-input" 
                placeholder="Write Todo.." 
                value={newTodo} 
                name="text"/>
                <button onClick={() => handleSubmit()} className="add-todo-button">
                    Add Todo
                </button>
            </form>


            <TodoList list={list} newTodo={newTodo}/>
          

      

        </div>
    )
}

export default AddTodo
