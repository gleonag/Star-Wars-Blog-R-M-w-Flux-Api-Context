import React from 'react'

export const getList = async(type) => {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/${type}/`)
    const respuestaJson = await respuesta.json();
    return respuestaJson.results;
}

export const getPeople = () => getList("character")

export const getCharacter = async(id) =>{
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const respuestaJson = await respuesta.json();
    return respuestaJson;
}


