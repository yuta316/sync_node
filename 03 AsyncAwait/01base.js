import fetch from 'node-fetch'

const fetchBookTitle = () => {
  return fetch('https://azu.github.io/promises-book/json/book.json')
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      return json.title
    })
}

const main = () => {
  fetchBookTitle().then((title) => [console.log(title)])
}
main()
