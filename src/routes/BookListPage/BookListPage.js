import React, { Component } from 'react'
import BookListContext from '../../contexts/BookListContext.js'
import BookApiService from '../../services/book-api-service'
import { Section } from '../../components/Utils/Utils'
import BookListItem from '../../components/BookListItem/BookListItem'
import './BookListPage.css'

export default class BookListPage extends Component {
  static contextType = BookListContext

  componentDidMount() {
    this.context.clearError()
    BookApiService.getBooks()
      .then(this.context.setBookList)
      .catch(this.context.setError)
  }

  renderBooks() {
    const { bookList = [] } = this.context
    return bookList.map(book =>
      <BookListItem
        key={book.id}
        book={book}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='BookListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderBooks()}
      </Section>
    )
  }
}