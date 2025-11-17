# 📦 Shared Libraries

Переиспользуемые утилиты, типы и константы для всех приложений в экосистеме.

## Установка

```bash
npm install @donation-ecosystem/shared
```

## Использование

```javascript
const {
  constants,
  validators,
  formatters,
  contractABI
} = require('@donation-ecosystem/shared');

// Constants
console.log(constants.NETWORKS.MAINNET); // 1
console.log(constants.NFT_TIERS.GOLD); // 'Gold'

// Validators
const isValid = validators.isValidAddress('0x123...');
const { error } = validators.campaignSchema.validate(campaignData);

// Formatters
const formatted = formatters.formatEther(weiAmount);
const tier = formatters.getNFTTier(donationAmount);

// Contract ABIs
const contract = new ethers.Contract(address, contractABI.DonationABI, signer);
```

## Содержимое

### Constants
- Network IDs
- Contract addresses
- NFT tiers and thresholds
- Campaign statuses
- Notification types

### Validators
- Address validation
- Amount validation
- Campaign schema
- Donation schema

### Formatters
- ETH amount formatting
- Address formatting
- Timestamp formatting
- Progress calculation
- NFT tier determination

### Contract ABIs
- Donation contract ABI
- Campaign contract ABI
- NFT contract ABI

## Обновление

При обновлении контрактов не забудьте обновить:
1. Contract addresses в `constants.js`
2. ABIs в `contractABI.js`
