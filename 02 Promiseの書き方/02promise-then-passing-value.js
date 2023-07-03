// TaskAからTaskBに値を渡す
const doubleUp = (value) => {
  return value * 2
}
const increment = (value) => {
  return value + 1
}
const output = (value) => {
  console.log(value)
}

const promise = Promise.resolve(1)
promise
  .then(increment)
  .then(doubleUp)
  .then(output)
  .catch((error) => {
    console.log(error)
  })
