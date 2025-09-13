.PHONY: help
up: ## コンテナを起動
	docker compose up -d
down: ## コンテナを停止
	docker compose down
rebuild: ## コンテナを再ビルド
	docker compose up -d --build
app: ## appコンテナに入る
	docker compose exec -it app bash
ps: ## コンテナの起動状況確認
	docker compose ps
help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
