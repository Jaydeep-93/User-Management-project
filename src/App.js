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
    <>
      <AddUser saveUserData={addUserToList} />
      <UsersList users={ users }/>
    </>
  );
}

export default App;
