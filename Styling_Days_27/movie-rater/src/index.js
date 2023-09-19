import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth from './components/auth'; 
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

function Router()
{
  return (
    
    <React.StrictMode>
      <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/movies" element={<App />} />
        </Routes>
      </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
   

  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Router/>
  
);

reportWebVitals();