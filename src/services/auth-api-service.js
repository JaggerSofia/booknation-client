import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`https://git.heroku.com/shrouded-wave-72208.git/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postUser(user) {
     return fetch(`https://git.heroku.com/shrouded-wave-72208.git/api/users`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(user),
     })
       .then(res =>
         (!res.ok)
           ? res.json().then(e => Promise.reject(e))
           : res.json()
       )
   },
}

export default AuthApiService