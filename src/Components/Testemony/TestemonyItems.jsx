import React, { useState } from 'react'

const TestemonyItems = ({ item }) => {
  return (
    <div className="review-img">
        <span>{item.author}</span>
        <p>{item.jobRole}</p>
        <div>{item.starRating}</div>
        <div>{item.avatarUrl}</div>
        <p>{item.comment}</p>
    </div>
  )
}

export default TestemonyItems