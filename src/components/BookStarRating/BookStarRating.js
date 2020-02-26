import React from 'react'


export function BookStarRating({rating}) {
  const stars = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
  ]

  for (let i = 0; i < rating; i++) {
    stars[i].filled = true
  }

  return <span className='BookStarRating'>
    { stars.map((star, index) => <Star key={index} filled={star.filled} />) }
  </span>
}

function Star({filled}) {
  const library = filled ? 'fas' : 'far'
  return '⭐'
}