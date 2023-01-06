import React from 'react'

export default function Todo({todo}) { // importing mapped todo from TodoList
  return (
    <div>
     <label>
        <input type="checkbox" checked={todo.complete}/>
      {todo.name}
     </label>
     
    </div>
  )
}
