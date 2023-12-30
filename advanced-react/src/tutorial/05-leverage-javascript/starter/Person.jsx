import React from 'react'


export function Person({name, nickName, images}){
  const image = images[0].small.url;
  return (
    <div>
      <img src={image} alt={name} style={{height: "50px"}}></img>
    <h2>{name}</h2>
    <h4>nickname: {nickName}</h4>
    </div>
  )
}