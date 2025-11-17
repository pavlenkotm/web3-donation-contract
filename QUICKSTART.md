# ⚡ Quick Start Guide

## 5-минутный запуск

### 1. Клонирование и установка

```bash
git clone https://github.com/pavlenkotm/web3-donation-contract.git
cd web3-donation-contract
npm install
```

### 2. Запуск через Docker (рекомендуется)

```bash
# Запустить все сервисы
docker-compose up -d

# Проверить статус
docker-compose ps

# Просмотр логов
docker-compose logs -f
```

**Готово!** Все приложения запущены:

- 🎨 Frontend: http://localhost:3000
- 🔧 Backend: http://localhost:3001
- 🎛️ Admin: http://localhost:3003
- 🔔 Notifications: http://localhost:3002
- 📊 Analytics: http://localhost:5000

### 3. Запуск без Docker

**Terminal 1 - MongoDB & Redis:**
```bash
# MongoDB
mongod --dbpath ./data/db

# Redis (в другом терминале)
redis-server
```

**Terminal 2 - Backend:**
```bash
cd apps/backend
cp .env.example .env
npm install
npm run dev
```

**Terminal 3 - Frontend:**
```bash
cd apps/frontend
npm install
npm run dev
```

**Terminal 4 - Analytics:**
```bash
cd apps/analytics
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

**Terminal 5 - Notifications:**
```bash
cd apps/notifications
cp .env.example .env
npm install
npm run dev
```

## Быстрый тест функционала

### 1. Открыть Frontend
Перейти на http://localhost:3000

### 2. Подключить кошелек
Нажать "Connect Wallet" и выбрать MetaMask

### 3. Посмотреть кампании
Перейти в раздел "Campaigns"

### 4. Админ панель
Открыть http://localhost:3003 для управления

## Smart Contracts

### Компиляция и тест

```bash
cd apps/contracts

# Компиляция
forge build

# Тестирование
forge test

# Деплой локально
forge script script/Deploy.s.sol --rpc-url http://localhost:8545 --broadcast
```

## Полезные команды

```bash
# Остановить все сервисы (Docker)
docker-compose down

# Пересобрать все
docker-compose build

# Очистить всё
docker-compose down -v
npm run clean

# Запустить тесты
npm test

# Линтинг
npm run lint
```

## Troubleshooting

### Порт уже занят

```bash
# Найти процесс
lsof -i :3001

# Убить процесс
kill -9 <PID>
```

### MongoDB не подключается

```bash
# Проверить запущен ли MongoDB
ps aux | grep mongod

# Запустить вручную
mongod --dbpath ./data/db
```

### Docker проблемы

```bash
# Очистить Docker
docker system prune -a

# Пересобрать
docker-compose build --no-cache
```

## Следующие шаги

1. Прочитать [Architecture Guide](docs/ARCHITECTURE.md)
2. Изучить [Deployment Guide](docs/DEPLOYMENT.md)
3. Посмотреть документацию каждого приложения
4. Начать разработку!

## Поддержка

- 📖 [Полная документация](README.md)
- 🐛 [Report Bug](https://github.com/pavlenkotm/web3-donation-contract/issues)
- 💡 [Request Feature](https://github.com/pavlenkotm/web3-donation-contract/issues)
