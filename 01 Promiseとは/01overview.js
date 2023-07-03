// コンストラクタ
const promise = new Promise((resolve, reject) => {
  // 非同期の処理
  // 処理が終わったらresolve or rejectを呼ぶ
})

// メソッド
promise.then(onFullfilled, onRejected)
// 成功したとき→onFullfilledが呼ばれる
// 失敗したとき→onRejectedが呼ばれる

// エラー処理だけ書きたい場合は以下の通り
promise.catch(onRejected)

// Staticメソッド
Promise.all()
Promise.resolve()
