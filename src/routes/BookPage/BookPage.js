import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookContext from '../../contexts/BookContext'
import BookApiService from '../../services/book-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import { BookReviewRating } from '../../components/BookReviewRating/BookReviewRating'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './BookPage.css'

export default class BookPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = BookContext

  componentDidMount() {
    const { bookId } = this.props.match.params
    this.context.clearError()
    BookApiService.getBook(bookId)
      .then(this.context.setBook)
      .catch(this.context.setError)
    BookApiService.getBookReviews(bookId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearBook()
  }

  renderBook() {
    const { book, reviews } = this.context
    return <>
      <div className='BookPage__image' style={{backgroundImage: `url(${book.image})`}} />
      <h2>{book.title}</h2>
      <BookContent book={book} />
      <BookReviews reviews={reviews} />
      <ReviewForm />
    </>
  }

  render() {
    const { error, book } = this.context
    let content
    if (error) {
      content = (error.error === `Book doesn't exist`)
        ? <p className='red'>Book not found</p>
        : <p className='red'>There was an error</p>
    } else if (!book.id) {
      content = <div className='loading' />
    } else {
      content = this.renderBook()
    }
    return (
      <Section className='BookPage'>
        {content}
      </Section>
    )
  }
}

function BookContent({ book }) {
  return (
    <p className='BookPage__content'>
      {book.content}
    </p>
  )
}

function BookReviews({ reviews = [] }) {
  return (
    <ul className='BookPage__review-list'>
      {reviews.map(review =>
        <li key={review.id} className='BookPage__review'>
          <p className='BookPage__review-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='BookPage__review-icon blue'
            />
            {review.text}
          </p>
          <p className='BookPage__review-user'>
            <BookStarRating rating={review.rating} />
            <Hyph />
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}