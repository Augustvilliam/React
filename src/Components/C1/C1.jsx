import React from 'react'
import Header from './Header'
import C1Hero from './C1Hero'
import Testmenu from '../Testcomponent/Testmenu'


const C1 = () => {
  return (
  
    <div className="c1 bg-gradient">
        <div className="container">
            <Testmenu />
            <C1Hero />
        </div>
    </div>
  )
}

export default C1