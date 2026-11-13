# Estate Demo
Тестовый стенд: Astro (сайт) + Cloudflare Workers (хостинг и приём заявок).
Объекты лежат в src/data/listings.json; в реальном проекте их заменит CMS (Sanity).

Локально: npm install && npm run dev
Сборка: npm run build  (папка dist)
Деплой: подключить репозиторий в Cloudflare (Workers & Pages → Create → Import from Git),
build command `npm run build`, deploy command `npx wrangler deploy`.
