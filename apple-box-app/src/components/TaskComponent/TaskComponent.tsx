import React from 'react';
import useFetchTask from '../../requests/useFetchTask';
import { Task as TaskType } from '../../types/TaskType';

type TaskProp = {
  task: TaskType;
};

const TaskComponent = () => {
  const { loading, task } = useFetchTask();

  const activity = task?.activity;
  return <div>{activity && <div>{activity} </div>}</div>;
};

export default TaskComponent;
