import config from '../config'
import TokenService from '../services/token-service'

const BookApiService = {
  getBooks() {
    return fetch(`${config.API_ENDPOINT}/books`, {
    
    })
      .then(res => {
        if (!res.ok)  {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
  getBook(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}`, {
      
    })
      .then(res => {
        if (!res.ok)  {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
  getBookReviews(bookId) {
    return fetch(`${config.API_ENDPOINT}/books/${bookId}/reviews`, {
    
    })
      .then(res => {
        if (!res.ok)  {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
  
  postReview(bookId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        book_id: bookId,
        rating,
        text,
      }),
    })
      .then(res => {
        if (!res.ok)  {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  }
}

export default BookApiService