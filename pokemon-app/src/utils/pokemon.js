// 全てのポケモンデータを取得する関数
export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    // URLからポケモンのデータを取得開始
    // fetch()は指定したURLからデータを取得する関数
    fetch(url)
      // サーバーからのレスポンスを受け取ったら実行
      // res.json()で、受け取ったデータをJSONに変換
      .then((res) => res.json())
      // JSON形式に変換されたデータを受け取る
      // resolve()を呼ぶことで、このPromiseが成功したことを伝え、JSON形式のデータを返す
      .then((data) => resolve(data));
  });
};

// 詳細なポケモンデータを取得する関数
export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          resolve(data);
        });
    })
};
