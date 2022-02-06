import React, { useEffect } from 'react';
import { Task } from '../types/TaskType';
import axios from 'axios';

export async function fetchTask(
  taskType: string,
  participants: number,
  price: number
): Promise<Task> {
  const route = 'http://www.boredapi.com/api/activity/';
  const params: Record<string, unknown> = {
    participants: participants,
    price: price,
  };

  if (taskType !== '') {
    params.type = taskType;
  }

  const response = await axios(route, { params });
  return response.data;
}

export function useFetchTask(
  shouldFetch: boolean,
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>,
  taskType: string,
  participants: number,
  price: number
): {
  loading: boolean;
  task: Task | undefined;
  error: string | null;
} {
  const [loading, setLoading] = React.useState(false);
  const [task, setTask] = React.useState<Task | undefined>();
  const [error, setError] = React.useState(null);

  useEffect(() => {
    if (shouldFetch) {
      setLoading(true);
      fetchTask(taskType, participants, price)
        .then(taskData => {
          if (taskData) {
            setTask(taskData);
          }
          setShouldFetch(false);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [shouldFetch, setShouldFetch, taskType, participants, price]);

  return { loading, task, error };
}
