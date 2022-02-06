import React from 'react';
import { Task as TaskType } from '../../types/TaskType';

type TaskProp = {
  isLoading: boolean;
  task: TaskType;
};

const TaskComponent = ({ isLoading, task }: TaskProp) => {
  const activity = task?.activity;
  return <div>{activity && !isLoading && <div>{activity} </div>}</div>;
};

export default TaskComponent;
