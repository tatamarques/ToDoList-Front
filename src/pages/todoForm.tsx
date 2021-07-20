import React, { ChangeEvent, useCallback, useState, useRef } from 'react'
import { useEffect } from 'react';
import {Form} from '@unform/web';
import TodoTask from '../components/TodoTask';


import api from '../services/api';

import {Container, Content} from './styles';


interface ItodoList{
  id: string;
  title: string;
  description: string;
  createdOn: Date;
  dueDate: Date;
}

const TodoForm: React.FC = () =>{
  const formRef = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState<ItodoList[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else{
      setDescription(e.target.value);
    };
  };  

  useEffect(() => {
     api.get<ItodoList[]>("/").then((response) => {
      setTodoList(response.data);
      
  })
  },[]);

 
 const checkField = useCallback(() => {
   if (!title) {
     alert('Title must be informed!');
   }
   else if (!description) {
     alert('Description must be informed!');
   };

}, [title, description]); 

  const handleSubmit = useCallback (async() => {   
    
    if (title && description) {
      const newTodo = {
        id: '',
        title: title, 
        description: description,
        createdOn: new Date(),
        dueDate: new Date(),}
     setTodoList([...todoList, newTodo]);

    await api.post("/", newTodo).then((response) => {
     setTodoList([...todoList, response.data]);
    });
    setTitle("");
    setDescription("")

    }
  },[title, description, todoList ]);
  
  const updateTask = useCallback(async(id: string, title: string, description: string) => {
    const updateData = {
      title: title,
      description: description   }
    
    await api.put(`/${id}`, updateData).then((response) => { 
      setTodoList([...todoList, response.data])})

    await api.get<ItodoList[]>("/").then((response) => {
      setTodoList(response.data);
    })  

    },[todoList]); 

  const deleteTask = useCallback(async(id: string) => {
      await api.delete(`/${id}`).then((response) => {
      setTodoList(response.data)})
    },[]);
   
  return(
    <Container>
      <Content>
      <Form ref={formRef} onSubmit={handleSubmit}  >
        <h1>To do List</h1>
        <input 
          ref={formRef}
          type='text'
          placeholder='Title'
          value={title}
          name='title'
          className='title' 
          onChange={handleChange}>

        </input>
        <input 
          type='text'
          placeholder='Description'
          value={description}
          name='description'
          className='description' 
          onChange={handleChange}>
        </input>  
           
        <button 
          type="submit"
          className="todo-button"
          onClick={checkField}
        >
          New task
        </button>  
        
          <ul>            
            {todoList.map((task: ItodoList, key: number) => {
              return<TodoTask key={key} task={task} updateTask={updateTask} deleteTask={deleteTask}/>
              })}            
          </ul> 
        
        </Form>
      </Content>
    </Container>
  )

}

export default TodoForm;