// App.js
import React, { useState } from 'react';
import FormBuilder from './components/FormBuilder';
import Login from './components/Login';
import UserList from './components/UserList';
import VideoPlayer from './components/VideoPlayer';
// import CommentList from './components/CommentList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState([]);
  const [comments, setComments] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleLogin = () => {
    // Perform login logic (e.g., validate credentials)
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };



  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <UserList users={users} setUsers={setUsers} />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
       <FormBuilder onSubmit={handleFormSubmit} />
      <h2>Form Data</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <VideoPlayer />
      
    </div>
  );
}

export default App;
