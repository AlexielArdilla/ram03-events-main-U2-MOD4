

export function getCharacters(){
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
}

export function getLocations(){
  return fetch("https://rickandmortyapi.com/api/location")
  .then((res) => res.json())
}

export function getEpisodes(){
  return fetch("https://rickandmortyapi.com/api/episode")
  .then((res) => res.json())
}