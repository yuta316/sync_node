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
// 複数のリリースを取得しレスポンスとボディの配列を返す
const fetchResponse = async (resources) => {
  const results = []
  for (let i = 0; i < resources.length; i++) {
    const resource = resources[i]
    const response = await dymmyFetch(resource)
    results.push(response.body)
  }
  return results
}

const resources = ['/resources/A', '/resources/B']
fetchResponse(resources).then((res) => {
  console.log(res)
})
