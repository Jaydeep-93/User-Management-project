import React, { useState } from 'react';
import AddUser from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

const userList = [];

function App() {
  const [users, setUsers] = useState(userList); 

  const addUserToList = userData => {
    setUsers(prevList => {
      return [...prevList, userData]; 
    })
  }

  return (
    <div>
      <AddUser saveUserData={addUserToList} />
      <UsersList users={ users }/>
    </div>
  );
}

export default App;
