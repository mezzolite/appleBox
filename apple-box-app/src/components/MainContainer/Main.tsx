import React from 'react';
import TaskSearch from '../TaskSearch/TaskSearch';

import './style.scss';
const Main = () => {
  return (
    <>
      <div>
        <h4>To start, pick out task criteria</h4>
        <TaskSearch />
      </div>
    </>
  );
};

export default Main;
