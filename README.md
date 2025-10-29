# Donation Smart Contract 💰

A simple Solidity contract that accepts donations and allows the owner to withdraw funds.  
Created by **PavlenkoTM** — for learning and testing Web3 automation.

## 🧩 Features
- Accepts ETH transfers
- Emits `Donated` and `Withdrawn` events
- Owner can withdraw collected funds
- View current contract balance

## ⚙️ Compile locally (Foundry)
```bash
# install foundry if not installed
curl -L https://foundry.paradigm.xyz | bash
~/.foundry/bin/foundryup

# build
~/.foundry/bin/forge build
```

## 🚀 Test quickly in Remix
- Open https://remix.ethereum.org
- Create a file `Donation.sol`, paste the contract from `contracts/Donation.sol`
- Compile with 0.8.20
- Deploy `Donation`
- Use the "low-level" value field to send donations; call `withdraw()` as owner

## 📬 Contact
Telegram: [@pavlenkotm](https://t.me/pavlenkotm)
