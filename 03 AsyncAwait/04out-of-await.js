const asyncMain = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 16)
  })
}

console.log('1.関数呼び出し')
asyncMain().then(() => {
  console.log('3.関数完了')
})
console.log('2.async関数外')
