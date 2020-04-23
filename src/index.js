import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { BookListProvider } from './contexts/BookListContext'
import { BookProvider } from './contexts/BookContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <BookListProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </BookListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
