var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// 複数の非同期処理をまとめる
const fetchURLCallback = (url, callback) => {
  const req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onload = () => {
    if (200 <= req.status && req.status < 300) {
      callback(null, req.responseText)
    } else {
      callback(new Error(req.statusText), req.response)
    }
  }
  req.onerror = () => {
    callback(new Error(req.statusText))
  }
  req.send()
}

// jsonパースを行う
const jsonParse = (callback, error, value) => {
  if (error) {
    callback(error, value)
  } else {
    try {
      const result = JSON.parse(value)
      callback(null, result)
    } catch (e) {
      callback(e, value)
    }
  }
}

// リクエスト処理をまとめておく
const request = {
  comment(callback) {
    return fetchURLCallback(
      'https://azu.github.io/promises-book/json/comment.json',
      jsonParse.bind(null, callback)
    )
  },
  people(callback) {
    return fetchURLCallback(
      'https://azu.github.io/promises-book/json/people.json',
      jsonParse.bind(null, callback)
    )
  },
}

// 複数のリクエストを呼び、最後にcallbackを呼ぶ
const allRequest = (requests, callback, results) => {
  if (requests.length === 0) {
    return callback(null, results)
  }
  const req = requests.shift()
  req((error, value) => {
    if (error) {
      callback(error, value)
    } else {
      results.push(value)
      allRequest(requests, callback, results)
    }
  })
}

const main = (callback) => {
  allRequest([request.comment, request.people], callback, [])
}

main((error, results) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(results)
})
