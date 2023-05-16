import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Component1 from './Component1'
import Component2 from './Component2'
import Component4 from './Component4'

export default function App() {
  return (
    <div>
      <Header/>
      <h1>Main App</h1>     
      <Component1/>
      <Component2/>
      <Component4/>
      <Footer/>
    </div>
  )
}