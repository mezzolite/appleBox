import { Alert, Button } from '@mui/material';
import React from 'react';
import TaskComponent from '../TaskComponent/TaskComponent';
// import { Task as TaskType } from '../../types/TaskType';
import { useFetchTask } from '../../requests/useFetchTask';
import TaskTypeSelector from '../TaskSelectors/TaskTypeSelector';
import TaskParticipantsSlider from '../TaskSelectors/TaskParticipantsSlider';

import './style.scss';
import TaskPriceSlider from '../TaskSelectors/TaskPriceSlider';

const TaskSearch = () => {
  const [showTask, setShowTask] = React.useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [currentTask, setCurrentTask] = React.useState<TaskType | null>();
  const [taskType, setTaskType] = React.useState<string>('');
  const [participants, setParticipants] = React.useState<number>(1);
  const [price, setPrice] = React.useState<number>(0);
  console.log('taskType', taskType);

  const { loading, task, error } = useFetchTask(
    shouldFetch,
    setShouldFetch,
    taskType,
    participants,
    price
  );

  if (error) {
    return (
      <Alert severity="error">
        Something went wrong, please pick another task!
      </Alert>
    );
  }

  const handleClick = () => {
    setShouldFetch(true);
    setShowTask(true);
  };
  return (
    <div>
      <TaskTypeSelector taskType={taskType} setTaskType={setTaskType} />
      <TaskParticipantsSlider setParticipants={setParticipants} />
      <TaskPriceSlider setPrice={setPrice} />
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
