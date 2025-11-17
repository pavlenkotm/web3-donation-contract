# 🔗 Smart Contracts

Smart contracts для donation ecosystem.

## Контракты

### 1. Donation.sol
Базовый контракт для приёма пожертвований.

### 2. DonationCampaign.sol
Контракт для создания и управления кампаниями по сбору средств с целевыми суммами и дедлайнами.

### 3. DonationNFT.sol
NFT контракт для награждения доноров уникальными токенами в зависимости от суммы пожертвования.

## Установка

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

## Команды

```bash
# Компиляция
forge build

# Тестирование
forge test

# Деплой локально
forge script script/Deploy.s.sol:DeployScript --rpc-url http://localhost:8545 --broadcast

# Деплой в тестовую сеть
forge script script/Deploy.s.sol:DeployScript --rpc-url $TESTNET_RPC_URL --broadcast --verify
```

## Структура

```
contracts/
├── Donation.sol          # Базовый donation контракт
├── DonationCampaign.sol  # Кампании с целями
└── DonationNFT.sol       # NFT награды для доноров
```
