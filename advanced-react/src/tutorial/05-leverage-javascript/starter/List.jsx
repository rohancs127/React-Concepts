import React from 'react'
import {people} from '../../../data'
import {Person} from './Person'

const List = () => {
  return (
    <div>
        <h1>Leverage Javascript</h1>
        <h4>Hello</h4>
        <div>{people.map((person)=>{
                return <Person key={person.name} {...person}/>
        })}</div>
    </div>
  )
}

export default List