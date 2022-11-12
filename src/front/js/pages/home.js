import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {getPeople} from "../services/getList";
import Cards from "../component/Cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [personajes, setPersonajes] = useState ([])
	useEffect (() => {
		setPersonajes(store.people)
	console.log("STORE.VALUE",store)
	  },[store.people])
	  return (
		<>
		  
			{personajes.map(personaje => (
			  
			  <Cards key={personaje.id} 
				id={personaje.id} 
				name={personaje.name} 
				status={personaje.status} 
				gender={personaje.gender} 
				image={personaje.image}/>
			
			  ))
}
		</>
	  )
};
