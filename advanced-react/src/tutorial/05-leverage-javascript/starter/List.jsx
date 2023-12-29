import React from 'react'
import {people} from '../../../data'
import Person from './Person'

const List = () => {
  return (
    <div>
        <h1>Leverage Javascript</h1>
        <h1>Hello</h1>
        <div>{people.map((person)=>{
                return <Person/>
        })}</div>
    </div>
  )
}

export default List