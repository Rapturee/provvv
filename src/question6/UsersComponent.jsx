import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './userSlice';

function UsersComponent() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const handleSubmit = () => {
    dispatch(addUser(name));
    setName('');
  };

  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Lägg till</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersComponent;