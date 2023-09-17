import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
function MovieDetails(props){

const [highlighted,setHighlited]=useState(-1)

   let mov=props.movie
   const highlightRate=high=>evt=>{
       setHighlited(high)
   }

   const rateClicked = rate => evnt => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Token 67073e141a882bd3a89fffeb606077301f1b8fbf'
        },
        body:JSON.stringify({stars:rate+1})
      })
      .then(()=>getDetails())
      .catch(error=>console.log(error))
   }
    

   const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token 67073e141a882bd3a89fffeb606077301f1b8fbf'
      }
    })
    .then(resp=>resp.json())
    .then(resp=>props.updateMovie(resp))
    .catch(error=>console.log(error))
 }

   


    return (
        <React.Fragment>
          
          {mov ? 
          (<div>
              <h1>{mov.title}</h1>
              <p>{mov.description}</p>
              <FontAwesomeIcon icon={faStar} className={mov.avg_rating>0? 'orange':''}/>
              <FontAwesomeIcon icon={faStar} className={mov.avg_rating>1? 'orange':''}/>
              <FontAwesomeIcon icon={faStar} className={mov.avg_rating>2? 'orange':''}/>
              <FontAwesomeIcon icon={faStar} className={mov.avg_rating>3? 'orange':''}/>
              <FontAwesomeIcon icon={faStar} className={mov.avg_rating>4? 'orange':''}/>
              ({mov.no_of_rating})
              
              <div className="rate-container">
                  <h2>Rate It</h2>
                  {
                    
                    [...Array(5)].map(( e,i)=>{
                        return <FontAwesomeIcon key={i} icon={faStar} className={highlighted> i-1 ? 'purple':''}
                        
                        onMouseEnter ={highlightRate(i)}
                        onMouseLeave={highlightRate(-1)}
                        onClick={rateClicked(i)}
                       
                        />
                    })}

              </div>

          </div>
          ) :null}
        </React.Fragment>
    )
}

export default MovieDetails