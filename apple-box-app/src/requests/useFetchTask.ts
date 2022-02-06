import React, { useEffect } from 'react';
import { Task } from '../types/TaskType';
import axios from 'axios';

export async function fetchTask(): Promise<Task> {
  const route = 'http://www.boredapi.com/api/activity/';
  const response = await axios(route);
  return response.data;
}

export function useFetchTask(
  shouldFetch: boolean,
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>
): {
  loading: boolean;
  task: Task | undefined;
} {
  const [loading, setLoading] = React.useState(false);
  const [task, setTask] = React.useState<Task | undefined>();

  useEffect(() => {
    if (shouldFetch) {
      setLoading(true);
      fetchTask().then(taskData => {
        if (taskData) {
          setTask(taskData);
        }
        setShouldFetch(false);
        setLoading(false);
      });
    }
  }, [shouldFetch, setShouldFetch]);

  return { loading, task };
}
