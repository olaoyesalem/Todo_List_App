import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
  return( 
 // {todos.length}   //Numbneeer of todos
 // we want to get the names of all the todo list we have
      todos.map(todo =>{    // were mapping todos to todo
        return <Todo key ={todo.id} todo = {todo}/> // then we are saving the {todo} we have maaped to todo from Todo
      })
   
  )
}
