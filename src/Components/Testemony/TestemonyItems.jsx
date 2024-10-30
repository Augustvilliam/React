import React, { useState } from 'react'
import StarRating from '../GeneralComponents/StarRating'

const TestemonyItems = ({ item }) => {
  return (
    <div className="review-img">
        <img className="quote-img" src="./src/assets/img/quotes.svg"></img>
        <div className="star-rating">
          <StarRating rating={item.starRating} />
        </div>
        <p>{item.comment}</p>
        <div className="profile">
          <span>{item.author}</span>
          <p>{item.jobRole}</p>
          <div>     
            <img  src={item.avatarUrl} alt="new"/>
          </div>
        </div>
    </div>
  )
}

export default TestemonyItems

//StarRating component gjord med hjälp av chatGPT 