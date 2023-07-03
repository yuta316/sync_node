var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// 複数の非同期処理をまとめる
const fetchURLCallback = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onload = () => {
      if (200 <= req.status && req.status < 300) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = () => {
      reject(new Error(req.statusText))
    }
    req.send()
  })
}

// リクエスト処理をまとめておく
const request = {
  comment() {
    return fetchURLCallback(
      'https://azu.github.io/promises-book/json/comment.json'
    ).then(JSON.parse)
  },
  people() {
    return fetchURLCallback(
      'https://azu.github.io/promises-book/json/people.json'
    ).then(JSON.parse)
  },
}

const main = () => {
  // Promise.allはpromiseオブジェクトの配列を扱う
  return Promise.all([request.comment(), request.people()])
}

main()
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
