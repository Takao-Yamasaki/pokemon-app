import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  // 最初からポケモンのデータを取得するため、loadingする前提
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  // 一回だけ呼び出したいので、第二引数は[]で指定する
  useEffect(() => {
    // asyncを使って非同期処理でデータ取得
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // getALLPokemonで取得した内容を出力
      // console.log(res);
      // 次ページのURLをセットする
      setNextURL(res.next);
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

  // console.log(pokemonData);
  
  // 次ページをデータ読み込む関数
  const handleNextPage = async () => {
    // ページの読み込み
    setLoading(true);
    // 各ポケモンの詳細なデータを取得
    let data = await getAllPokemon(nextURL);
    // console.log(data);
    // 各ポケモンの詳細なデータを取得
    await loadPokemon(data.results);
    // 次ページのURLをセットする
    setNextURL(data.next);
    // 前ページのURLをセットする
    setPrevURL(data.previous);
    // データを取得できたので、ローディングはしない
    setLoading(false);
  };

  // 前ページをデータ読み込む関数
  const handlePrevPage = async () => {
    // 前のページがなければ、何もしない
    if(!prevURL) return;
    // ページの読み込み
    setLoading(true);
    // 各ポケモンの詳細なデータを取得
    let data = await getAllPokemon(prevURL);
    // 各ポケモンの詳細なデータを種畜
    await loadPokemon(data.results);
    // 次ページのURLをセットする
    setNextURL(data.next);
    // 前ページのURLをセットする
    setPrevURL(data.previous);
    // データを取得できたので、ローディングはしない
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) :(
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i)=>{
                return <Card key={i} pokemon={pokemon} /> ;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
