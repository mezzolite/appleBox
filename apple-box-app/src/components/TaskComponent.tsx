import React from 'react';
import { Task as TaskType } from '../types/TaskType';

type TaskProp = {
  task: TaskType;
};

const TaskComponent = ({ task }: TaskProp) => {
  console.log('task', task);
  return <div>This is your task</div>;
};

export default TaskComponent;
