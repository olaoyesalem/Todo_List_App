import React, { useState, useRef,useEffect } from "react";
import TodoList from "./TodoList";

// import uuidv4 from 'uuid'; // to get random numbers
const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
	const [todos,setTodos,] = useState([],); //object destructuring
	// we are passing function (todos,setTodos) to useState- that changes the state of the app.
	const todoNameRef = useRef();// get value from the user
	

	useEffect(()=>{ // To load our todos
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(setTodos)setTodos(storedTodos)
	},[])


	useEffect(()=>{ // anytime we refresh our browser it clears all our list  // so we need to do this
		localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))// Storing todos into local storage
	},[todos])

	function toggleTodos(id){
		const newTodos = [...todos]// creatinmg a copy of to
		
	}


	function handleAddTodo(e){
	
		const name = todoNameRef.current.value;
		if(name ==='') return
		console.log(name);
		 
		 setTodos(prevTodos=>{
			return[...prevTodos,{id:1, name: name, complete:false} ]
		 })
		 todoNameRef.current.value=null;
	}


	return (
		<>
		
      <TodoList todos={todos}/>
			{/* we're passing todos to todos prop from Todolist*/}
			<input ref = {todoNameRef} type="text" />
			<button onClick={handleAddTodo}> Add Todo</button>
			<button>Complete </button>
			<div>0 left to do</div>
		
     
		</>
	);
}

export default App;
