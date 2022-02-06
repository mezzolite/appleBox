import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import * as allFetchFunctions from './useFetchTask';

const mockTask = {
  activity: 'Tell a jest',
  accessibility: 0.1,
  participants: 3,
  price: 5,
  type: 'something',
};

jest.mock('axios');

// jest.spyOn(allFetchFunctions, 'fetchTask');
// const mockFetchTask = allFetchFunctions.fetchTask as jest.MockedFunction<
//   typeof allFetchFunctions.fetchTask
// >;
// mockFetchTask.mockResolvedValue(() => {
//   mockTask;
// });

describe('UseFetchTask', () => {
  it('initial data state is loading and data empty', () => {
    const { result } = renderHook(() =>
      allFetchFunctions.useFetchTask(true, jest.fn())
    );

    expect(result.current).toStrictEqual({ loading: true, task: undefined });
  });

  // it('should fetch the task and set loading to false', async () => {
  //   const { result, waitForNextUpdate } = renderHook(() =>
  //     allFetchFunctions.useFetchTask(true, jest.fn())
  //   );

  //   console.log('fetchTask', allFetchFunctions.fetchTask());

  //   await waitForNextUpdate();

  //   expect(result.current).toStrictEqual({
  //     loading: false,
  //     task: mockTask,
  //   });
  // });
});
