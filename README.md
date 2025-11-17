# 🌐 Donation Ecosystem - Multi-Application Platform

[![Solidity CI](https://github.com/pavlenkotm/web3-donation-contract/actions/workflows/main.yml/badge.svg)](https://github.com/pavlenkotm/web3-donation-contract/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Полнофункциональная Web3 экосистема для управления донатами с множеством приложений**

Автор — **PavlenkoTM**

---

## 🎯 Обзор

Donation Ecosystem - это современная мульти-приложение платформа построенная на микросервисной архитектуре, которая объединяет:

- 🔗 **Smart Contracts** - Solidity контракты для донатов, кампаний и NFT
- 🔧 **Backend API** - Node.js/Express REST API
- 🎨 **Frontend Web App** - React приложение для пользователей
- 🎛️ **Admin Dashboard** - Vue.js панель администратора
- 📱 **Mobile App** - React Native для iOS/Android
- 📊 **Analytics Service** - Python микросервис для аналитики
- 🔔 **Notification Service** - Node.js сервис уведомлений
- 📦 **Shared Libraries** - Общие утилиты и типы

---

## 🏗️ Архитектура

```
web3-donation-contract/
├── apps/
│   ├── contracts/           # Smart Contracts (Solidity + Foundry)
│   ├── backend/             # Backend API (Node.js + Express)
│   ├── frontend/            # Frontend Web App (React + Vite)
│   ├── admin-dashboard/     # Admin Panel (Vue.js)
│   ├── mobile/              # Mobile App (React Native)
│   ├── analytics/           # Analytics Service (Python + FastAPI)
│   └── notifications/       # Notification Service (Node.js)
├── packages/
│   ├── shared/              # Shared utilities & types
│   └── config/              # Configuration files
├── docs/                    # Documentation
├── docker-compose.yml       # Docker orchestration
├── turbo.json              # Turborepo configuration
└── package.json            # Root package
```

---

## ✨ Возможности

### Smart Contracts
- ✅ Базовый контракт для донатов
- ✅ Кампании с целевыми суммами и дедлайнами
- ✅ NFT награды для доноров (5 уровней)
- ✅ Безопасность и gas оптимизация

### Backend API
- ✅ REST API для всех операций
- ✅ Взаимодействие с blockchain через ethers.js
- ✅ MongoDB для пользовательских данных
- ✅ Redis кэширование
- ✅ JWT аутентификация
- ✅ Rate limiting

### Frontend Web App
- ✅ Современный UI с TailwindCSS
- ✅ Web3 интеграция (Wagmi + RainbowKit)
- ✅ Подключение кошельков
- ✅ Просмотр и создание кампаний
- ✅ История донатов
- ✅ NFT галерея

### Admin Dashboard
- ✅ Vue 3 с Element Plus
- ✅ Управление кампаниями
- ✅ Просмотр всех транзакций
- ✅ Аналитика и графики
- ✅ Управление пользователями

### Mobile App
- ✅ Cross-platform (iOS + Android)
- ✅ WalletConnect интеграция
- ✅ Push уведомления
- ✅ Оффлайн режим
- ✅ QR код сканирование

### Analytics Service
- ✅ Pandas для анализа данных
- ✅ ML предсказания успеха кампаний
- ✅ Real-time статистика
- ✅ Data visualization
- ✅ Экспорт отчетов

### Notification Service
- ✅ Email уведомления (Nodemailer)
- ✅ SMS через Twilio
- ✅ Push notifications (Firebase)
- ✅ WebSocket real-time updates
- ✅ Event-driven архитектура

---

## 🚀 Быстрый старт

### Требования

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- MongoDB
- Redis

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/pavlenkotm/web3-donation-contract.git
cd web3-donation-contract

# Установить зависимости
npm install

# Запустить все сервисы через Docker
docker-compose up -d
```

### Доступ к приложениям

- 🎨 **Frontend**: http://localhost:3000
- 🔧 **Backend API**: http://localhost:3001
- 🎛️ **Admin Dashboard**: http://localhost:3003
- 🔔 **Notifications**: http://localhost:3002
- 📊 **Analytics**: http://localhost:5000

---

## 📦 Приложения и сервисы

### 1. Smart Contracts (`apps/contracts`)

**Технологии:** Solidity 0.8.20, Foundry

```bash
cd apps/contracts
forge build
forge test
```

**Контракты:**
- `Donation.sol` - Базовый donation контракт
- `DonationCampaign.sol` - Кампании с целями
- `DonationNFT.sol` - NFT для доноров

[Подробнее →](apps/contracts/README.md)

---

### 2. Backend API (`apps/backend`)

**Технологии:** Node.js, Express, MongoDB, Redis

```bash
cd apps/backend
npm install
npm run dev
```

**API Endpoints:**
- `GET/POST /api/donations` - Donations
- `GET/POST /api/campaigns` - Campaigns
- `GET /api/nft` - NFTs
- `GET /api/analytics` - Analytics

[Подробнее →](apps/backend/README.md)

---

### 3. Frontend Web App (`apps/frontend`)

**Технологии:** React 18, Vite, TailwindCSS, Wagmi

```bash
cd apps/frontend
npm install
npm run dev
```

**Основные функции:**
- Подключение Web3 кошелька
- Создание и просмотр кампаний
- Донаты в ETH
- NFT коллекция

[Подробнее →](apps/frontend/README.md)

---

### 4. Admin Dashboard (`apps/admin-dashboard`)

**Технологии:** Vue 3, Element Plus, Pinia

```bash
cd apps/admin-dashboard
npm install
npm run dev
```

**Функции:**
- Dashboard со статистикой
- Управление кампаниями
- Просмотр транзакций
- Аналитика

[Подробнее →](apps/admin-dashboard/README.md)

---

### 5. Mobile App (`apps/mobile`)

**Технологии:** React Native 0.73, WalletConnect

```bash
cd apps/mobile
npm install
npm run android  # или npm run ios
```

**Функции:**
- Мобильные донаты
- Push уведомления
- Сканирование QR кодов
- NFT галерея

[Подробнее →](apps/mobile/README.md)

---

### 6. Analytics Service (`apps/analytics`)

**Технологии:** Python, FastAPI, Pandas, Scikit-learn

```bash
cd apps/analytics
pip install -r requirements.txt
python main.py
```

**API:**
- `GET /api/stats/overview` - Общая статистика
- `GET /api/stats/trends` - Тренды
- `GET /api/analytics/predictions` - ML предсказания

[Подробнее →](apps/analytics/README.md)

---

### 7. Notification Service (`apps/notifications`)

**Технологии:** Node.js, WebSocket, Bull, Twilio, Firebase

```bash
cd apps/notifications
npm install
npm run dev
```

**Функции:**
- Email (Nodemailer)
- SMS (Twilio)
- Push (Firebase)
- WebSocket real-time

[Подробнее →](apps/notifications/README.md)

---

## 🛠️ Разработка

### Запуск отдельных приложений

```bash
# Backend
npm run dev --workspace=@donation-ecosystem/backend

# Frontend
npm run dev --workspace=@donation-ecosystem/frontend

# Admin Dashboard
npm run dev --workspace=@donation-ecosystem/admin-dashboard
```

### Сборка всех приложений

```bash
# С помощью Turbo
npm run build

# Тестирование
npm test

# Линтинг
npm run lint
```

### Docker Compose

```bash
# Запуск всех сервисов
docker-compose up -d

# Остановка
docker-compose down

# Просмотр логов
docker-compose logs -f
```

---

## 📊 Технологический стек

### Frontend
- **React 18** - UI библиотека
- **Vue 3** - Admin dashboard
- **React Native** - Mobile app
- **Vite** - Build tool
- **TailwindCSS** - Стилизация
- **Ethers.js** - Ethereum library
- **Wagmi** - React Hooks для Ethereum
- **RainbowKit** - Wallet UI

### Backend
- **Node.js + Express** - Web framework
- **Python + FastAPI** - Analytics
- **MongoDB** - NoSQL database
- **Redis** - Caching
- **Bull** - Job queue
- **JWT** - Authentication

### Blockchain
- **Solidity 0.8.20** - Smart contracts
- **Foundry** - Development framework
- **Ethers.js** - Interaction library

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Turbo** - Monorepo tool
- **GitHub Actions** - CI/CD

---

## 📚 Документация

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing](docs/CONTRIBUTING.md)

### Документация приложений
- [Contracts](apps/contracts/README.md)
- [Backend](apps/backend/README.md)
- [Frontend](apps/frontend/README.md)
- [Admin Dashboard](apps/admin-dashboard/README.md)
- [Mobile](apps/mobile/README.md)
- [Analytics](apps/analytics/README.md)
- [Notifications](apps/notifications/README.md)

---

## 🔐 Безопасность

- ✅ Smart contract security best practices
- ✅ JWT authentication
- ✅ Rate limiting
- ✅ Input validation
- ✅ CORS configuration
- ✅ HTTPS required
- ✅ Environment variables

---

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details.

```bash
# Fork repository
# Create feature branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m 'feat: add amazing feature'

# Push and create PR
git push origin feature/amazing-feature
```

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Автор

**PavlenkoTM**

- GitHub: [@pavlenkotm](https://github.com/pavlenkotm)
- Project: [web3-donation-contract](https://github.com/pavlenkotm/web3-donation-contract)

---

## 🙏 Acknowledgments

- OpenZeppelin для smart contract libraries
- Foundry для development framework
- Всему Web3 сообществу

---

## 📈 Roadmap

- [ ] Интеграция с другими blockchains
- [ ] DAO функционал
- [ ] Staking механизм
- [ ] Децентрализованное хранилище (IPFS)
- [ ] Расширенная аналитика
- [ ] Мобильное приложение в App Store/Play Store
- [ ] i18n поддержка

---

## ⭐ Support

Если проект полезен, поставьте звезду на GitHub!

Для вопросов и issues:
- [GitHub Issues](https://github.com/pavlenkotm/web3-donation-contract/issues)
- [Discussions](https://github.com/pavlenkotm/web3-donation-contract/discussions)

---

**Made with ❤️ by PavlenkoTM**
