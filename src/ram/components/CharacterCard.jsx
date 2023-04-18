import React from 'react'

export const CharacterCard = ({ name, image }) => {
  return (
    <li>
      <img src={ image } alt="" />
      <div>
        <span>{ name }</span>
      </div>
    </li>
  )
}
