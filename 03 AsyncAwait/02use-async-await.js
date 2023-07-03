import fetch from 'node-fetch'

// awaitにより、.then.catch等のコールバック関数の記載が不要に
const fetchBookTitle = async () => {
  const res = await fetch('https://azu.github.io/promises-book/json/book.json')
  const json = await res.json()
  return json.title
}

const main = async () => {
  const res = await fetchBookTitle()
  console.log(res)
}
main()
