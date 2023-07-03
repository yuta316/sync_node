var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// URLをフェッチして、ステータスコードが200以上300未満の場合は成功とみなす
function fetchURL(URL) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('GET', URL, true)

    req.onload = () => {
      if (200 <= req.status && req.status < 300) {
        resolve(req.responseText)
      } else {
        // 一般的にErrorオブジェクトを渡すことが多い
        reject(new Error(req.statusText))
      }
    }
    req.onerror = () => {
      reject(new Error(req.statusText))
    }
    req.send()
  })
}

// 呼び出してみる
const URL = 'https://httpbin.org/get'
fetchURL(URL)
  .then(
    (onFullfilled = (value) => {
      console.log(value)
    })
  )
  .catch(
    (onRejected = (error) => {
      console.log(error)
    })
  )
