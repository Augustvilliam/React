import React, {useState, useEffect, useContext} from 'react'
import { TestimonialContext } from '../../Contexts/TestimonialContext'
import TestemonyItems from './TestemonyItems'

const Testemony = () => {
  const { testimonials } = useContext(TestimonialContext);
  
    return (
      <div className="c4-5 bg-primary ">
            <div className="Soc-med-review container">
                <h1>Clients are <br/> Loving Our App</h1>
                <div className="review-container">
                  {testimonials.map((item) => (
                    <TestemonyItems key={item.id} item={item} />
                  ))}
                </div>
            </div>
      </div>
  )
}

export default Testemony


