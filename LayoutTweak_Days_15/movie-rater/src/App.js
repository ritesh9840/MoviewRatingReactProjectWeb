
import React,{useState,useEffect} from 'react';
import './App.css';
import MovieList from './componenets/movie-list'
import MovieDetails from './componenets/movie-details';
import MovieForm from './componenets/movie-form';

function App() {
  const [movies,setMovie]=useState([]);
  const [selectedMovie,setSelectedMovie]=useState(null);
  const [editedMovie,setEditedMovie]=useState(null);

  useEffect(()=>{

    fetch("http://127.0.0.1:8000/api/movies",{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token 67073e141a882bd3a89fffeb606077301f1b8fbf'
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setMovie(resp))
    .catch(error=>console.log(error))
  },[])




const loadMovie=movie=>{
  setSelectedMovie(movie);
  setEditedMovie(null)
}

const editClicked=movie=>{
  setEditedMovie(movie)
  setSelectedMovie(null);
}

  return (
    <div className="App">
      <header className="App-header">
         <h1> Moview Rater</h1>
      </header>
      <div className="layout">
           <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}/>
           <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
           <MovieForm movie={editedMovie}/>
         </div>
    </div>
  );
}

export default App;
