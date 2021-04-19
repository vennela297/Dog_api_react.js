import React from 'react'

function Card(props) {

       let pBreed = [];

    props.breeds.map((breed) => {
        if(breed.id == props.Id) {
             pBreed = breed
        }
    })



    return (
        <div className="card bounce">
          <p>{pBreed.name}</p>
          {console.log(pBreed)}
          
          <img src={pBreed.image?.url} alt="dog"></img>

          <h5><strong>Life_span:</strong> {pBreed.life_span}</h5>
          
          <h5><strong>breed_group:</strong> {pBreed.breed_group}</h5>
          <h5><strong>Temparament:</strong> {pBreed.temperament}</h5>
          <h5><strong>Bred_for: </strong>{pBreed.bred_for}</h5>
          <h5><strong>Imperial Weight: </strong>{pBreed.weight?.imperial}</h5>
          <h5><strong>Imperial Height:</strong> {pBreed.height?.imperial}</h5>
        </div>
    )
}

export default Card
