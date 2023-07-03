const dymmyFetch = (path) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith('/resources')) {
        resolve({ body: `Response body of ${path}` })
      } else {
        reject(new Error('NOT FOUND'))
      }
    }, 1000 * Math.random())
  })
}
// 取得の順番を気にしない場合はPromise.allを利用する
const fetchResponse = async (resources) => {
  const promiss = resources.map((resource) => {
    return dymmyFetch(resource)

    // 全てのリソースが取得できるまで待つ
    // Promise.allは[ResA,ResB]の様に結果が配列となる
  })
  const responses = await Promise.all(promiss)
  return responses.map((response) => {
    return response.body
  })
}

const resources = ['/resources/A', '/resources/B']
fetchResponse(resources).then((res) => {
  console.log(res)
})
