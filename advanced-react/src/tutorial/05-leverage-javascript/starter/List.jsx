import React from 'react'
import {people} from '../../../data'

const List = () => {
  return (
    <div>
        <h1>Leverage Javascript</h1>
        <h1>Hello</h1>
        <div>{people.map((person)=>{
                return <h2 key={person.id}>{person.name}</h2>
        })}</div>
    </div>
  )
}

export default List