# 🎨 Frontend Web App

React приложение для donation platform с Web3 интеграцией.

## Технологии

- **React 18** - UI библиотека
- **Vite** - Build tool
- **TailwindCSS** - Стилизация
- **Wagmi** - Ethereum React Hooks
- **RainbowKit** - Wallet connection UI
- **React Router** - Навигация
- **TanStack Query** - Data fetching
- **Zustand** - State management

## Установка

```bash
npm install
```

## Запуск

```bash
# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Структура

```
src/
├── components/       # Переиспользуемые компоненты
├── pages/           # Страницы приложения
├── hooks/           # Custom React hooks
├── utils/           # Утилиты
├── services/        # API services
└── stores/          # Zustand stores
```

## Основные функции

- Подключение Web3 кошелька
- Просмотр и создание кампаний
- Донаты в ETH
- Просмотр NFT наград
- Профиль пользователя
- Аналитика донатов
