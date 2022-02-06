import React from 'react';
import { Task as TaskType } from '../../types/TaskType';

type TaskProp = {
  isLoading: boolean;
  task: TaskType | null;
};

const TaskComponent = ({ isLoading, task }: TaskProp) => {
  const activity = task?.activity;
  return (
    <div>
      {task && task.error && <div>{task.error}</div>}
      {activity && !isLoading && <div>{activity} </div>}
    </div>
  );
};

export default TaskComponent;
