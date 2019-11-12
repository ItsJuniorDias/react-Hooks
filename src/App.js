import React, {useState} from 'react';

function App() {
   const [tech, setTech] = useState(['ReactJs','React Native']);
   const [newTech, setNewTech] = useState('');

   function handleAdd() {
      setTech([ ...tech, newTech ]);
   }


  return (
    <>
    <ul>
      {tech.map(t => (
      <li key={t}> {t}</li>
      ))}
    </ul>
    <input value={newTech} onChange={e => setNewTech(e.target.value)} />
    <button type="button  " onClick={handleAdd}>Adicionar</button>
    </>
  );
  }

export default App;
