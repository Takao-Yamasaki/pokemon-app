import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  // 最初からポケモンのデータを取得するため、loadingする前提
  const [loading, setLoading] = useState(true);

  // 一回だけ呼び出したいので、第二引数は[]で指定する
  useEffect(() => {
    // asyncを使って非同期処理でデータ取得
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
      // データを取得できたので、ローディングはしない
      setLoading(false);
    };
    // fetchPokemonDataを呼び出す
    fetchPokemonData();
  }, []);

  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) :(
      <>
        <h1>ポケモンデータを取得しました</h1>
      </>
    )}
  </div>;
}

export default App;
