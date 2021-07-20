import React, {useState} from 'react'
import {format} from 'date-fns';

import {ListTodo} from '../pages/styles';


interface ITask{
  id: string;
  title: string;
  description: string;
  createdOn: Date;
  dueDate: Date;
}

interface Props{
  task: ITask;
  updateTask(id: string, title: string, description: string): void;
  deleteTask(id: string): void;
}
//<span>{task.description}</span>
const TodoTask = ({task, updateTask ,deleteTask }: Props) => {

  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(task.description);
  
 
  const createdOnFormat = format(new Date(task.createdOn), 'dd-MM-yyyy hh:mm');
  const dueDateFormat = format(new Date(task.dueDate), 'dd-MM-yyyy hh:mm');


  const handleEdit = () => {
    setOnEdit(true)
  }

  const handleSave = () => {
    updateTask(task.id, task.title, editValue);

    setOnEdit(false);
  }
  
  if (onEdit) {

    return(
      <>
      <ListTodo>
        <input type="text"
              defaultValue={task.title}
               disabled={true}/>
        <input type="text"  
         placeholder='description' 
         id='editValue'
         defaultValue={editValue}
         name="editValue" 
         onChange={e => setEditValue(e.target.value.toLowerCase())}
        />
      </ListTodo>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => {setOnEdit(false)}}>Cancel</button>
     
     </> 
     
    )

  }else {
    return(
      
        <li>
        <span>{task.title} </span>
        <span>{task.description}</span> 
        <span>{createdOnFormat}</span>     
        <span>{dueDateFormat}</span>
      <button onClick={handleEdit}>Update</button>
      <button onClick={() => {deleteTask(task.id)}}>Delete</button>
      </li>
     
    )
  }

};

export default TodoTask;