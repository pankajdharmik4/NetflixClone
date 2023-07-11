import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/ListContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MovieContextProvider>
        <AuthContextProvider>
          <ListContextProvider>
            <App />
          </ListContextProvider>
        </AuthContextProvider>
      </MovieContextProvider>
  </React.StrictMode>
);
