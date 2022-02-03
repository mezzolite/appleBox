import { Button } from '@mui/material';
import React from 'react';
import TaskComponent from '../TaskComponent/TaskComponent';

import './style.scss';

const TaskSearch = () => {
  const [showTask, setShowTask] = React.useState<boolean>(false);

  const handleClick = () => {
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
      {showTask && <TaskComponent />}
    </div>
  );
};

export default TaskSearch;
