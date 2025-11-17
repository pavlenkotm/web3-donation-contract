# 🔧 Backend API

Node.js/Express API для взаимодействия с блокчейном и управления данными.

## Возможности

- REST API для всех операций
- Взаимодействие с smart contracts через ethers.js
- MongoDB для хранения пользовательских данных
- Redis для кэширования
- Rate limiting и security middleware
- JWT аутентификация

## Установка

```bash
npm install
cp .env.example .env
# Отредактируйте .env файл
```

## Запуск

```bash
# Development
npm run dev

# Production
npm start

# Tests
npm test
```

## API Endpoints

### Donations
- `GET /api/donations` - Все донаты
- `POST /api/donations/verify` - Верификация транзакции
- `GET /api/donations/:txHash` - Донат по хэшу
- `GET /api/donations/user/:address` - Донаты пользователя

### Campaigns
- `GET /api/campaigns` - Все кампании
- `GET /api/campaigns/:id` - Кампания по ID
- `POST /api/campaigns` - Создать кампанию

### NFT
- `GET /api/nft/owner/:address` - NFT владельца
- `GET /api/nft/:tokenId` - Метаданные NFT

### Analytics
- `GET /api/analytics/overview` - Общая статистика
- `GET /api/analytics/trends` - Тренды донатов

## Архитектура

```
src/
├── index.js           # Entry point
├── routes/            # API routes
├── controllers/       # Business logic
├── services/          # Blockchain interaction
├── models/            # Database models
└── middleware/        # Custom middleware
```
