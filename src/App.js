import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotAuth from './pages/NotAuth';
import Edit from './pages/Edit';
import stylesheet from './app.css'
import ItemList from './components/ItemList';

function App() {

  
  const [items, setItems] = useState ([ 

  ]);

  const addItemHandler = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/not-auth" element={<NotAuth />} />
        <Route path="/edit" element={<Edit > onAddItem = {addItemHandler} </Edit>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
