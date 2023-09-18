
const TOKEN="67073e141a882bd3a89fffeb606077301f1b8fbf"
export class API{

    
  
  static loginUser(body) {

    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json())


  }

  
  
  static updateMovie(movie_id,body){

       return  fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Token ${TOKEN}`
        },
        body:JSON.stringify(body)
      }).then(resp=>resp.json())
      

    }

  static createMovie(body) {

    return fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json())


  }

  static deleteMovie(movie_id) {

    return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
    })


  }

}