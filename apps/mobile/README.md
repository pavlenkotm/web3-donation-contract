# 📱 Mobile App

React Native мобильное приложение для donation platform.

## Технологии

- **React Native 0.73** - Cross-platform framework
- **React Navigation** - Navigation
- **Ethers.js** - Blockchain interaction
- **WalletConnect** - Wallet connection
- **Zustand** - State management

## Установка

```bash
npm install

# iOS
cd ios && pod install && cd ..

# Android - убедитесь что Android SDK установлен
```

## Запуск

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Функции

- Просмотр активных кампаний
- Создание донатов через мобильный кошелек
- Просмотр истории донатов
- Коллекция NFT наград
- Push уведомления о новых кампаниях
- QR код сканирование для быстрых донатов

## Структура

```
src/
├── screens/        # Экраны приложения
├── components/     # Переиспользуемые компоненты
├── navigation/     # Navigation setup
├── services/       # API services
├── hooks/          # Custom hooks
└── utils/          # Утилиты
```

## Платформы

- iOS 13.0+
- Android 6.0+ (API 23+)
