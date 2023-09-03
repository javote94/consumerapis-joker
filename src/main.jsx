import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Pokemons from './pages/Pokemons/Pokemons.jsx';
import './main.css';

const route = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/pokemons",
    element : <Pokemons />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
