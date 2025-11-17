# 🏗️ Architecture Overview

## System Architecture

Donation Ecosystem - это полнофункциональная Web3 платформа построенная на микросервисной архитектуре.

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Applications                      │
├──────────────┬──────────────┬──────────────┬────────────────┤
│   Frontend   │    Admin     │    Mobile    │   Browser      │
│   (React)    │  Dashboard   │   (React     │   Extension    │
│              │   (Vue.js)   │   Native)    │                │
└──────┬───────┴──────┬───────┴──────┬───────┴────────┬───────┘
       │              │              │                │
       └──────────────┴──────────────┴────────────────┘
                          │
       ┌──────────────────┴──────────────────┐
       │          API Gateway                │
       │      (Backend - Express)            │
       └──────────────┬─────────────────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
┌──────▼─────┐ ┌─────▼─────┐ ┌─────▼──────┐
│ Analytics  │ │Notification│ │  Shared    │
│  Service   │ │  Service   │ │ Libraries  │
│  (Python)  │ │  (Node.js) │ │            │
└──────┬─────┘ └─────┬──────┘ └────────────┘
       │             │
       └──────┬──────┘
              │
   ┌──────────┴──────────┐
   │                     │
┌──▼────┐         ┌─────▼─────┐
│MongoDB│         │   Redis   │
└───────┘         └───────────┘

       ┌─────────────────────┐
       │   Blockchain Layer  │
       ├─────────────────────┤
       │  Donation Contract  │
       │  Campaign Contract  │
       │   NFT Contract      │
       └─────────────────────┘
```

## Application Components

### 1. Smart Contracts (`apps/contracts`)
- **Donation.sol** - Базовый контракт для донатов
- **DonationCampaign.sol** - Кампании с целями
- **DonationNFT.sol** - NFT награды

### 2. Backend API (`apps/backend`)
- REST API для всех операций
- Взаимодействие с blockchain
- Аутентификация и авторизация
- MongoDB для пользовательских данных

### 3. Frontend Web App (`apps/frontend`)
- React 18 + Vite
- Web3 интеграция (Wagmi + RainbowKit)
- TailwindCSS для стилей
- Real-time updates

### 4. Admin Dashboard (`apps/admin-dashboard`)
- Vue 3 + Composition API
- Element Plus UI
- Управление кампаниями
- Аналитика и отчеты

### 5. Mobile App (`apps/mobile`)
- React Native 0.73
- Cross-platform (iOS + Android)
- WalletConnect интеграция
- Push notifications

### 6. Analytics Service (`apps/analytics`)
- Python FastAPI
- Pandas для анализа данных
- ML предсказания
- Real-time статистика

### 7. Notification Service (`apps/notifications`)
- Node.js + Express
- WebSocket для real-time
- Email, SMS, Push notifications
- Event-driven архитектура

## Shared Packages

### packages/shared
- Константы и типы
- Валидаторы
- Форматтеры
- Contract ABIs

### packages/config
- Общие конфигурации
- Environment variables
- Network settings

## Data Flow

1. **Donation Flow**
   ```
   User → Frontend → Wallet → Smart Contract
                                    ↓
                              Event Emitted
                                    ↓
   Backend ← Blockchain Listener ← Event
      ↓
   Save to DB → Trigger Notification → Send to User
   ```

2. **Campaign Creation Flow**
   ```
   Admin → Admin Dashboard → Backend API
                                    ↓
                            Create Transaction
                                    ↓
                             Smart Contract
                                    ↓
                            Campaign Created
                                    ↓
                          Update Frontend/Mobile
   ```

## Technology Stack

### Frontend
- React 18, Vue 3, React Native
- Vite, TailwindCSS, Element Plus
- Ethers.js, Wagmi, RainbowKit

### Backend
- Node.js, Express, Python FastAPI
- MongoDB, Redis
- Bull (job queue)

### Blockchain
- Solidity 0.8.20
- Foundry
- Ethers.js

### DevOps
- Docker & Docker Compose
- Turbo (monorepo)
- GitHub Actions

## Security Considerations

1. **Smart Contracts**
   - Reentrancy protection
   - Access control
   - SafeMath operations

2. **Backend**
   - JWT authentication
   - Rate limiting
   - Input validation
   - CORS configuration

3. **Frontend**
   - Wallet signature verification
   - XSS prevention
   - HTTPS only

## Scalability

- Horizontal scaling через Docker
- Redis для кэширования
- MongoDB sharding
- CDN для статики
- Load balancing
