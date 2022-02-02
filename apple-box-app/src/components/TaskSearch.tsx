import { Button } from '@mui/material';
import React from 'react';
import useFetchTask from '../requests/useFetchTask';
import TaskComponent from './TaskComponent';

const TaskSearch = () => {
  const { loading, task } = useFetchTask();

  if (task) {
    return (
      <div>
        <Button
          variant="contained"
          // onClick={() => {
          //   handleClick();
          // }}
        >
          Click to get a task
        </Button>
        <TaskComponent task={task} />
      </div>
    );
  }
  return (
    <div>
      <Button
        variant="contained"
        // onClick={() => {
        //   handleClick();
        // }}
      >
        Click to get a task
      </Button>
    </div>
  );
};

export default TaskSearch;
