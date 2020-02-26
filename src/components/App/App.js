import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import BookListPage from '../../routes/BookListPage/BookListPage'
import BookPage from '../../routes/BookPage/BookPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
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
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={BookListPage}
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/book/:bookId'}
              component={BookPage}
            />
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