import React from 'react';
import { Task as TaskType } from '../../types/TaskType';
import './style.scss';

type TaskProp = {
  isLoading: boolean;
  task: TaskType | null;
};

const TaskComponent = ({ isLoading, task }: TaskProp) => {
  const activity = task?.activity;
  return (
    <div className="TaskContainer">
      {task && task.error && <div className="TaskContent">{task.error}</div>}
      {activity && !isLoading && <div className="TaskContent">{activity} </div>}
    </div>
  );
};

export default TaskComponent;
