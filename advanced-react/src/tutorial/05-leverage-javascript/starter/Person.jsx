import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

export function Person({name, nickName='coder', images}){
  // const image = images && images[0] && images[0].small && images[0].small.url;
  const image = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={image} alt={name} style={{height: "50px"}}></img>
    <h2>{name}</h2>
    <h4>nickname: {nickName}</h4>
    </div>
  )
}