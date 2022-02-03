import React from 'react';
import TaskSearch from '../TaskSearch/TaskSearch';

const Main = () => {
  return (
    <>
      <h3>A task based adventure for fun and boredom alleviation.</h3>
      <div>
        <p>Pick a task</p>
        <TaskSearch />
      </div>
    </>
  );
};

export default Main;
