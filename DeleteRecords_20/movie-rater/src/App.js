
import React,{useState,useEffect} from 'react';
import './App.css';
import MovieList from './componenets/movie-list'
import MovieDetails from './componenets/movie-details';
import MovieForm from './componenets/movie-form';

function App() {
  const [movies,setMovies]=useState([]);
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
    .then(resp=>setMovies(resp))
    .catch(error=>console.log(error))
  },[])


const loadMovie=movie=>{
  setSelectedMovie(movie);
  setEditedMovie(null);
}

 

const editClicked=movie=>{
  setEditedMovie(movie)
  setSelectedMovie(null);
}

  const upDatedMovie = movie => {
    const newMovies = movies.map(mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies);
  }

  const newMovie= ()=>{
    setEditedMovie({title:'',description:'' });
    setSelectedMovie(null);

  }

  const movieCreated= movie =>{
    const newMovies=[...movies,movie];
    setMovies(newMovies)

  }
  const removeClicked=move=>{
    const newMovies= movies.filter(mov => mov.id !== move.id)
    setMovies(newMovies)
  }

  return (
    <div className="App">
      <header className="App-header">
         <h1> Moview Rater</h1>
      </header>
      <div className="layout">
           <div>
           <MovieList 
           movies={movies} 
           movieClicked={loadMovie} 
           editClicked={editClicked}
            removeClicked={removeClicked}
           />
           <button onClick={newMovie}>New Movie</button>
         </div>
           <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
        {editedMovie ? 
          <MovieForm movie={editedMovie} upDatedMovie={upDatedMovie} movieCreated={movieCreated}/>: null}
         </div>
    </div>
  );
}

export default App;
