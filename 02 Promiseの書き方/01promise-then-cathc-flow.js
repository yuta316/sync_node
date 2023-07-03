const taskA = () => {
  console.log('Task A')
}
const taskB = () => {
  console.log('Task B')
}
const onRejected = (error) => {
  console.log('Cathc Error A or B', error)
}
const finalTask = () => {
  console.log('Final Task')
}

// 次のケースではTaskA→TaskB→FinalTaskが呼ばれる
const promise = Promise.resolve()
promise.then(taskA).then(taskB).catch(onRejected).then(finalTask)

const taskA2 = () => {
  console.log('Task A2')
  throw new Error('throw Error @ Task A2')
}
// 次のケースではTaskA2→FinalTaskが呼ばれる
const promise2 = Promise.resolve()
promise2.then(taskA2).then(taskB).catch(onRejected).then(finalTask)
