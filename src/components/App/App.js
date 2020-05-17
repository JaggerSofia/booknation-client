import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import BookListPage from '../../routes/BookListPage/BookListPage'
import BookPage from '../../routes/BookPage/BookPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <p className='App__description'>In this first adaptation of BookNation, book lovers can anonymously leave reviews for books they enjoy!</p>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={BookListPage}
            />
            <Route exact path={'/book/:bookId'} component={BookPage} />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App