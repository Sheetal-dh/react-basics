import React from 'react'
import HeaderComponent from './HeaderComponent'

export default function Header({name, lastName, isCEO, array}) {
  return (
    <div>
      <h1>Welcome, {name}, {lastName}, IsCEO={isCEO ? "Yes" : "No"}</h1>
      <h2>{JSON.stringify(array)}</h2>
      <HeaderComponent/>
    </div>
  )
}