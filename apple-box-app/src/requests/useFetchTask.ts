import React, { useEffect } from 'react';
import { Task } from '../types/TaskType';
import axios from 'axios';

async function fetchTask(): Promise<Task> {
  const route = 'http://www.boredapi.com/api/activity/';
  const response = await axios(route);
  return response.data;
}

export default function useFetchTask(): {
  loading: boolean;
  task: Task | undefined;
} {
  const [loading, setLoading] = React.useState(false);
  const [task, setTask] = React.useState<Task | undefined>();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const taskData = await fetchTask();
      if (taskData) {
        setTask(taskData);
      }
      setLoading(false);
    }
    void getData();
  }, []);

  return { loading, task };
}
