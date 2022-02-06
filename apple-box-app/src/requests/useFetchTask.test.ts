import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetchTask, fetchTask } from './useFetchTask';
import axios from 'axios';
import { mocked } from 'jest-mock';

const mockTask = {
  activity: 'Tell a jest',
  accessibility: 0.1,
  participants: 3,
  price: 5,
  type: 'something',
};

jest.mock('axios');

const mockedAxios = mocked(axios, true);

describe('UseFetchTask', () => {
  describe('fetchTask', () => {
    it('should add a type to options if a type is passed in', () => {
      const route = 'http://www.boredapi.com/api/activity/';
      fetchTask('recreational', 1, 0);
      expect(mockedAxios).toHaveBeenCalledWith(route, { type: 'recreational' });
    });
  });

  describe('useFetchTask', () => {
    it('initial data state is loading and data empty', () => {
      const { result } = renderHook(() =>
        useFetchTask(true, jest.fn(), '', 1, 0)
      );

      expect(result.current).toStrictEqual({ loading: true, task: undefined });
    });

    // it('should fetch the task and set loading to false', async () => {
    //   const response = mockedAxios.get.mockResolvedValue(mockTask);
    //   const { result, waitForNextUpdate } = renderHook(() =>
    //     useFetchTask(true, jest.fn(), '')
    //   );

    //   await waitForNextUpdate();

    //   expect(result.current).toStrictEqual({
    //     loading: false,
    //     task: mockTask,
    //   });
    // });
  });
});
