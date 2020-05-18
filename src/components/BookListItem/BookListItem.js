import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BookListItem.css'

export default class BookListItem extends Component {
  render() {
    const { book } = this.props

    return (
        <Link to={`/book/${book.id}`} className='BookListItem'>
          <div className='BookListItem__image' style={{backgroundImage: `url(${book.image})`}} />

          <div className='BookListItem__details'>
            <div className='BookListItem__text'>
              <h2 className='BookListItem__heading'>{book.title}</h2>
              <p className='BookListItem__description'>{truncate(book.content)}</p>
            </div>
          </div>
        </Link>
    )
  }
}

function truncate(text) {
  const words = text.split(' ')

  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + ' ...'
  }

  return text
}