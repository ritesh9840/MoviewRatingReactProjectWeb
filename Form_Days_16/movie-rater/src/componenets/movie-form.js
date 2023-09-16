import React, {useState} from 'react'
function MovieForm(props) {

    
   
    const [title,setTitle]=useState(props.movie.title );
    const [description,setDescription]=useState(props.movie.description);

    const updateClicked=()=>{
        console.log("update here");
    }

   
    return (
        <React.Fragment>
            {
                props.movie ? (
                    <div>
                        <label for ="title">Title</label>
                        <input id="title" type="text" placeholder="title" value ={title} 
                            onChange={evt=>setTitle(evt.target.value)}
                        /> <br/>
                        <label for ="description">Description</label>
                        <textarea id="description" type="text" placeholder="description" value ={description} 
                         onChange={evt=>setDescription(evt.target.value)}
                        /> <br/>
                        <button onClick={updateClicked}>Update</button>

                    </div>
                ) : null
            }
        </React.Fragment>

    )
}

export default MovieForm