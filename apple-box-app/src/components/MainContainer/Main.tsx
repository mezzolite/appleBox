import React from 'react';
import TaskSearch from '../TaskSearch/TaskSearch';
import UserComponent from '../UserComponent/UserComponent';

import './style.scss';
const Main = () => {
  const [showTaskSearch, setShowTaskSearch] = React.useState<boolean>(false);

  return (
    <div className="MainContainer">
      {!showTaskSearch && (
        <div>
          <h4>Please add a username and zipcode to start</h4>
          <UserComponent setShowTaskSearch={setShowTaskSearch} />
        </div>
      )}
      {showTaskSearch && (
        <div>
          <h4>Pick out task criteria</h4>
          <TaskSearch />
        </div>
      )}
    </div>
  );
};

export default Main;
