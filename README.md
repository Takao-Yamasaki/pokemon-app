# pokemon-app
[PokeAPI](https://pokeapi.co/)を使ってReactで実装したポケモン図鑑のリポジトリです。

## プロジェクトの新規作成方法
- appコンテナを起動
```bash
make up
```
- appコンテナの稼働状況を確認
```bash
make ps
```
- appコンテナに入る
```bash
make app
```
- appコンテナ内でプロジェクトを作成(`despatched`)
```bash
npx create-react-app .
```
- Reactのバージョン確認
```bash
npm list react
pokemon-app@0.1.0 /pokemon-app
+-- @testing-library/react@16.3.0
| `-- react@19.1.1 deduped
+-- react-dom@19.1.1
| `-- react@19.1.1 deduped
+-- react-scripts@5.0.1
| `-- react@19.1.1 deduped
`-- react@19.1.1
```
- React18を使用したいので、ダウングレードする
```bash
npm install --save react@18.3.1 react-dom@18.3.1
```
- Reactのバージョン確認
```
# npm list react
pokemon-app@0.1.0 /pokemon-app
+-- @testing-library/react@16.3.0
| `-- react@18.3.1 deduped
+-- react-dom@18.3.1
| `-- react@18.3.1 deduped
+-- react-scripts@5.0.1
| `-- react@18.3.1 deduped
`-- react@18.3.1
```
- プロジェクト直下でGit管理したいので、競合を防止するため、`pokemon-app`配下に新規作成された次のファイルをコピーして、削除
```bash
cp -p pokemon-app/.gitignore .
rm -rf pokemon-app/.gitignore pokemon-app/README.md
```
- appコンテナ内でサーバーを起動
```bash
make rebuild
```
- [localhost:3000](localhost:3000)にアクセス

## 参考
- [Start a New React Project](https://18.react.dev/learn/start-a-new-react-project)
