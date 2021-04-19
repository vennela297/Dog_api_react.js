import React, { useState, useEffect } from "react";
import getBreeds from '../helpers/getBreeds';
import Error from './Error';
import Card from "./Card";

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);
  const [selectedBreedID,setSelectedBreedID] = useState(1);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
        .then((newBreeds) => {
            setBreeds(newBreeds);
        })
        .catch((error) => {
          console.log(error);
          setError("Error al cargar las razas");
        })
  }

  return (
    <>
      <select onChange={(e) => setSelectedBreedID(e.target.value)}>
        {breeds.map((breed) => (
             
          <option value={breed.id} key={breed.id}>
            {breed.name}
            
          </option>
        ))}
      </select>
      
      
      { error && <Error error={error} /> }

      

          
      <Card 
      Id={selectedBreedID}
       breeds={breeds} />
      
    </>

  );
};

export default Select