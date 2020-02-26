import React, { Component } from 'react'

const BookListContext = React.createContext({
  bookList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setBookList: () => {},
})
export default BookListContext

export class BookListProvider extends Component {
  state = {
    bookList: [],
    error: null,
  };

  setBookList = bookList => {
    this.setState({ bookList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      bookList: this.state.bookList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBookList: this.setBookList,
    }
    return (
      <BookListContext.Provider value={value}>
        {this.props.children}
      </BookListContext.Provider>
    )
  }
}