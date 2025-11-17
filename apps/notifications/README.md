# 🔔 Notification Service

Node.js микросервис для отправки уведомлений пользователям.

## Технологии

- **Express.js** - Web framework
- **WebSocket** - Real-time notifications
- **Bull** - Job queue with Redis
- **Nodemailer** - Email notifications
- **Twilio** - SMS notifications
- **Firebase Admin** - Push notifications
- **Web Push** - Browser push notifications

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
```

## API Endpoints

### Notifications
- `POST /api/notifications/send` - Отправить уведомление
- `GET /api/notifications/history/:userId` - История уведомлений
- `PUT /api/notifications/:id/read` - Отметить как прочитанное

### Subscriptions
- `POST /api/subscriptions/subscribe` - Подписаться на уведомления
- `POST /api/subscriptions/unsubscribe` - Отписаться
- `GET /api/subscriptions/:userId` - Получить подписки

## Функции

- Email уведомления (Nodemailer)
- SMS уведомления (Twilio)
- Push уведомления (Firebase)
- Browser push (Web Push)
- WebSocket real-time notifications
- Очередь уведомлений (Bull + Redis)
- Blockchain event listeners
- Notification preferences

## WebSocket

Подключение: `ws://localhost:3002`

События:
- `donation:created` - Новый донат
- `campaign:completed` - Кампания завершена
- `nft:minted` - NFT создан

## Порт

Default: **3002**
