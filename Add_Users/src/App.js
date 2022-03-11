import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser.js';
import './index.css';
import UserList from './Components/UserList/UserList.js';
import OverlayNotification from './Components/OverlayForm/OverlayNotification.js';
import {data} from './data';


function App() {
  const [users, setUsers] = useState(data);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const addUser = (newUser)  => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers, newUser];
      return newUsers;
    })
  }

  const handleError = (msg) => {
    setErrorMessage(msg);
    setError(true);
  }

  const closeErrorMessage = () => {
    setError(false);
  }

  return (
    <>  
      <div className="main"> 
        { error && 
          <OverlayNotification 
            message={errorMessage}  
            closeOverlay={closeErrorMessage}
          />
        }
        <AddUser onAddUser={addUser} onError={handleError}  />
        <UserList users={users} />
      </div>
    </>
  );
}

export default App;
