# 💰 Donation Smart Contract

[![Solidity CI](https://github.com/pavlenkotm/web3-donation-contract/actions/workflows/solidity.yml/badge.svg)](https://github.com/pavlenkotm/web3-donation-contract/actions/workflows/solidity.yml)
[![Open in Remix](https://img.shields.io/badge/Open%20in-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#version=soljson-v0.8.20+commit.a1b79de6.js&optimize=true&runs=200&evmVersion=london)

Простой смарт-контракт на **Solidity 0.8.20**, который принимает пожертвования и позволяет владельцу вывести средства.  
Автор — **PavlenkoTM**

---

## 🧩 Что умеет
- Принимает переводы ETH  
- Отправляет события `Donated` и `Withdrawn`  
- Позволяет владельцу вывести баланс  
- Показывает текущий баланс через `getBalance()`

---

## 🚀 Быстрый тест в Remix

1. Нажми кнопку **“Open in Remix”** вверху README  
2. В Remix создастся файл `Donation.sol`  
3. Нажми **Compile 0.8.20**  
4. Перейди во вкладку **Deploy & Run**  
   - В поле *Value* введи, например, `0.01 ether`  
   - Нажми **Transact** → внизу появится событие `Donated`  
5. Нажми **withdraw()**, чтобы вывести средства (только владелец контракта).

---

## ⚙️ Как собрать локально через Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
~/.foundry/bin/foundryup
~/.foundry/bin/forge build

