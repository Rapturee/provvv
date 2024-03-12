// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import React, { useState } from 'react';

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState('');

  const addHobby = () => {
    if (newHobby) {
      setHobbies([...hobbies, newHobby]);
      setNewHobby('');
    }
  };

  const removeHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  return (
    <div>
      <input 
        type="text" 
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
        placeholder="Lägg till en hobby"
      />
      <button onClick={addHobby}>Lägg till</button>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button onClick={() => removeHobby(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;