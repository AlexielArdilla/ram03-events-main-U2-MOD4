/* Importaciones de React */
import React, { useEffect, useState } from 'react'

/* Importacion de servicios y funciones */
import { getCharacters } from '../services/getCharacters';

/* Importaciones de componentes */
import { CharacterCard } from '../';


export const CharactersList = () => {
  /* Implemente aquí abajo su useState */
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState([true]);


  /* Implemente aquí abajo su useEffect */
  useEffect(() => {
    getCharacters()
      .then((data) => {
        console.log(data)
        setCharacter(data?.results)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false))
  }, [])

  if ( loading ) return <div>Cargando...</div>

  return (
    <ul>
      {
        character.map((item) => (
          <CharacterCard
            key={ item.id }
            {...item}
          />
        ))
      }
    </ul>
  )
}
