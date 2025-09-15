import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  // 一回だけ呼び出したいので、第二引数は[]で指定する
  useEffect(() => {
    // asyncを使って非同期処理でデータ取得
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
    };
    // fetchPokemonDataを呼び出す
    fetchPokemonData();
  }, []);

  return <div className="App"></div>;
}

export default App;
