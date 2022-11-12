import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../funciones/funciones.js'
import CardPersonaje from '../Views/CardPersonaje.jsx'

const Personaje = () => {
  const[personaje, setPersonaje] = useState(null)

  const params = useParams()
  useEffect(()=> {
    unicoPersonaje(params.id, setPersonaje)
  },[])
  return (
    <>
    {personaje !== null ? (
      <CardPersonaje 
          key={personaje.id} 
          name={personaje.name} 
          status={personaje.status} 
          gender={personaje.gender} 
          image={personaje.image}
          origin={personaje.origin.name}
          location={personaje.location.name}
           />
    ) : ('espera impaciente')}
    </>
    )
}

export default Personaje