import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}
    >
      <div className='icons'>
        {(!todo.isComplete) ? 
            <MdOutlineCheckBoxOutlineBlank className='checkbox-icon' onClick={() => completeTodo(todo.id)} />
          :
            <MdOutlineCheckBox className='checkbox-icon' onClick={() => completeTodo(todo.id)} />
        }
      </div>
      <div className='todo-text' key={todo.id} >
        {todo.text}
      </div>

      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon' />
      </div>
    </div>
  ))
}

export default Todo