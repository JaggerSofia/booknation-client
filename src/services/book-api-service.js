import config from '../config'
import TokenService from '../services/token-service'

const BookApiService = {
  getBooks() {
    return fetch(`https://git.heroku.com/shrouded-wave-72208.git/api/books`, {
  //     headers: {}
	// 	}).then(res =>
	// 		!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
	// 	)
	// },
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
  getBook(bookId) {
    return fetch(`https://git.heroku.com/shrouded-wave-72208.git/api/books/${bookId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
  getBookReviews(bookId) {
    return fetch(`https://git.heroku.com/shrouded-wave-72208.git/api/books/${bookId}/reviews`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  },
  postReview(bookId, text, rating) {
    return fetch(`https://git.heroku.com/shrouded-wave-72208.git/api/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        book_id: bookId,
        rating,
        text,
      }),
    })
      .then(res => {
        if (!res.ok)  {
          res.json().then(e => Promise.reject(e));
        }
        return res.json()
      })
  }
}

export default BookApiService