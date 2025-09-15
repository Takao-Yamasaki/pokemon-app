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
