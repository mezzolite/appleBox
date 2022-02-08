import React from 'react';
import { fetchTask } from './useFetchTask';
import axios from 'axios';
import { mocked } from 'jest-mock';

jest.mock('axios');

describe('UseFetchTask', () => {
  describe('fetchTask', () => {
    it('should add a type to options if a type is passed in', () => {
      const mockedAxios = mocked(axios, true);

      const route = 'http://www.boredapi.com/api/activity/';
      fetchTask('recreational', 1, 0);
      expect(mockedAxios).toHaveBeenCalledWith(route, {
        params: {
          type: 'recreational',
          participants: 1,
          price: 0,
        },
      });
    });
  });
});
