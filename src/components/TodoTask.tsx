import React, {useState} from 'react'
import {format} from 'date-fns';


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

const TodoTask = ({task, updateTask ,deleteTask }: Props) => {

  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(task.description);
  const [disabled, setDisabled] = useState(true);
 
  const createdOnFormat = format(new Date(task.createdOn), 'dd-MM-yyyy hh:mm');
  const dueDateFormat = format(new Date(task.dueDate), 'dd-MM-yyyy hh:mm');
  


  const handleEdit = () => {
    setOnEdit(true);
    setDisabled(true);
  }

  const handleSave = () => {
    updateTask(task.id, task.title, editValue);
    
    setOnEdit(false);
  }
  
  if (onEdit) {

    return(
      <>        
        <input type="text"
               defaultValue={task.title}
               disabled={true}
               className='title'/>
        <input type="text"  
         placeholder='description' 
         id='editValue'
         defaultValue={editValue}
         name="editValue" 
         className='description'
         onChange={(e) => {setEditValue(e.target.value.toLowerCase());setDisabled(false)}}
         
        />
    
      <button disabled={disabled} className="save" onClick={handleSave}>Save</button>
      <button className="cancel" onClick={() => {setOnEdit(false)}}>X</button>
    
     </> 
     
    )

  }else {
    return(
      
        <li>
        <span className="title">{task.title} </span>
        <span className="description">{task.description}</span> 

        <span className="createdOn">{createdOnFormat}</span>     
        <span className="dueDate">{dueDateFormat}</span>
      <button className="update" onClick={handleEdit}>Update</button>
      <button className="delete" onClick={() => {deleteTask(task.id)}}>Delete</button>
      </li>
     
    )
  }

};

export default TodoTask;