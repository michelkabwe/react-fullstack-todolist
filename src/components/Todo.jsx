import React, { useState } from 'react'
const Todo = ({todo}) => {



    return (

            <div className="todo_item">
                <div className="todo_item__header">
                    <span className="todo_button__wrapper">
                        <button>🔖</button>
                        <button >❌</button>
                    </span>
                </div>
                <div className="todo_item__wrapper">
                    <p>{todo.value}</p>
                  
                </div> 
            </div>
             
    )
    
}

export default Todo
