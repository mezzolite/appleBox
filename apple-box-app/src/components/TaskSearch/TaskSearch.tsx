import { Button } from '@mui/material';
import React from 'react';
import TaskComponent from '../TaskComponent/TaskComponent';
// import { Task as TaskType } from '../../types/TaskType';
import { useFetchTask } from '../../requests/useFetchTask';

import './style.scss';

const TaskSearch = () => {
  const [showTask, setShowTask] = React.useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [currentTask, setCurrentTask] = React.useState<TaskType | null>();
  const { loading, task } = useFetchTask(shouldFetch, setShouldFetch);

  const handleClick = () => {
    setShouldFetch(true);
    setShowTask(true);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          handleClick();
        }}
        className="TaskSearchButton"
      >
        Click to get a task
      </Button>
      {showTask && task && <TaskComponent isLoading={loading} task={task} />}
    </div>
  );
};

export default TaskSearch;
