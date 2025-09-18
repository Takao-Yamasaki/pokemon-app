import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  // 最初からポケモンのデータを取得するため、loadingする前提
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  // 一回だけ呼び出したいので、第二引数は[]で指定する
  useEffect(() => {
    // asyncを使って非同期処理でデータ取得
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // データを取得できたので、ローディングはしない
      setLoading(false);
    };
    // fetchPokemonDataを呼び出す
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    // 20種類のデータフェッチが終わるまで
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) :(
      <>
        <div className="pokemonCardContainer">
          {pokemonData.map((pokemon, i)=>{
            return <Card key={i} pokemon={pokemon} /> ;
          })}
        </div>
      </>
    )}
  </div>;
}

export default App;
