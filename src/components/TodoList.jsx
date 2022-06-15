import React, { useState, useEffect  } from 'react';
import Todo from './Todo.jsx';






const TodoList = ({list}) => {



/*useEffect(() => {
    const getData = async () =>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then((res) => setTodos(res))
              
            
    }
    getData();
    }, [setNewTodo]);*/
   
 



    return (
      
    <div 
    className="todos_container">


        {list.map((todo,index) => {
           return(
            <Todo  todo={todo} key={index}/>
           )
        })}
     
       
  
          </div>   



    )
}

export default TodoList
