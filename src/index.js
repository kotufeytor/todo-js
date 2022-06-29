import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml  } from "./js/componentes.js";

export const todoList = new TodoList(); //exporto este objeto

todoList.todos.forEach(todo => {
    crearTodoHtml ( todo );
});

const newTodo = new Todo('Aprender javascript');

// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();

newTodo.imprimirClase();



// console.log( 'todos' , todoList.todos)

// todoList.todos.forEach(crearTodoHtml);

// const tarea = new Todo('Aprender JavaScript !!');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','ABC123');
// sessionStorage.setItem('mi-key','ABC1234');

// setTimeout(() => {
    
//  localStorage.removeItem('mi-key');

// }, 1500);


