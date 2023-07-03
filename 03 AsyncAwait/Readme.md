# Async 関数とは

必ず Promise インスタンスを返す関数を定義する構文
return した値の代わりに、Promise.resolve(返り値)のように返り値をラップした Promise インスタンスを返す
'''
(例)
// 「値」をラップした Promise インスタンスを返す
async function doAsync() {
return 値;
}

doAsync().then((value) => {
console.log(value) // 値
})
'''
つまり上の async 関数は以下と同じ意味
'''
function doAsync() {
return Promise(resolve(値))
}
'''

# await 式とは

Promise の非同期処理が完了するまで（Promise の状態が変化するまで）待つ構文
非同期処理を同期処理のように扱うことで、Promise チェーンで実現した処理の流れの可読性を向上させる
