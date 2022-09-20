// import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import { FavouritesContextProvider } from './store/favourite-context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <FavouritesContextProvider>
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
  // </FavouritesContextProvider>
);

