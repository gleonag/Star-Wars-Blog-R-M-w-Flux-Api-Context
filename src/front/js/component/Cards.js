import React, {useContext, useState, useEffect} from 'react'
import {RiHeart3Fill} from 'react-icons/ri'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { MyContext } from '../funciones/ContextProvider.jsx';



const Cards = (props) => {
  // const [color, setColor] = useState(false)
  // const context = useContext(MyContext)
  
  // const handleClick = () => {
  //   context.actions.addFavorites(props.name)
  // }
  // const checkIfFavorites = () => {
    
  //   let inFavourites = context.store.favorites.includes(props.name) 
  //   setColor(inFavourites)
    
  // }
  // useEffect(()=> checkIfFavorites() ,[])
  return (
    <div class="d-flex flex-row mb-3">
      <Card style={{marginLeft:'10px' ,width: '260px'}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.gender}, {props.status}</Card.Text>
          <Link to={`/personaje/${props.id}`}>
            <Button variant="primary">Learn More!</Button>
          </Link>
          <Button variant="primary" style={{marginLeft:'4rem'}}><RiHeart3Fill/></Button>
        </Card.Body>
      </Card>
  </div>
  )
}

export default Cards