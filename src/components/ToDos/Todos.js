import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import ToDoForm from './ToDoForm.js';
import ToDoList from './ToDoList.js';
import './Todo.css';

export default function Todos() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="todo-page-container">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}
