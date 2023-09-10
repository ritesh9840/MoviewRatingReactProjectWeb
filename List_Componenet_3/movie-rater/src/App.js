
import React,{useState} from 'react';
import './App.css';

function App() {
  const [movies,setMovie]=useState(['Movie 1','Movie 2']);
  return (
    <div className="App">
      <header className="App-header">
         <h1> Moview Rater</h1>
      </header>
      <div className="layout">
           <div>
            {movies.map(movie=>{
              return <h2> {movie}</h2>
            })}
           </div>
           <div>Moview details</div>
         </div>
    </div>
  );
}

export default App;
