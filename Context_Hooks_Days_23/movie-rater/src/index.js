import React,{useState,createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth from './components/auth'; 
import reportWebVitals from './reportWebVitals';

export const TokenContext =createContext(null);

function Router()
{
 
  const [token, setToken] = useState('')
  return (
    
    <React.StrictMode>
      <TokenContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/movies" element={<App />} />
        </Routes>
      </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
   

  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Router/>
  
);

reportWebVitals();