import React, { Component } from 'react'

export const nullBook = {
  author: {},
  tags: [],
}

const BookContext = React.createContext({
  book: nullBook,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setBook: () => {},
  clearBook: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default BookContext

export class BookProvider extends Component {
  state = {
    book: nullBook,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setBook = book => {
    this.setState({ book })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearBook = () => {
    this.setBook(nullBook)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      book: this.state.book,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBook: this.setBook,
      setReviews: this.setReviews,
      clearBook: this.clearBook,
      addReview: this.addReview,
    }
    return (
      <BookContext.Provider value={value}>
        {this.props.children}
      </BookContext.Provider>
    )
  }
}