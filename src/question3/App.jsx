// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import React, { useState } from 'react';


function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Räknarens värde: {count}</p>
      <button onClick={increment}>Öka</button>
      <button onClick={decrement}>Minska</button>
    </div>
  );
}

export default App;