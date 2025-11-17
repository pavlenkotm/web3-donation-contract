const { ethers } = require('ethers');
const Joi = require('joi');

// Validate Ethereum address
function isValidAddress(address) {
  return ethers.isAddress(address);
}

// Validate amount
function isValidAmount(amount) {
  try {
    const parsed = ethers.parseEther(amount.toString());
    return parsed > 0n;
  } catch {
    return false;
  }
}

// Campaign validation schema
const campaignSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  beneficiary: Joi.string().custom((value, helpers) => {
    if (!isValidAddress(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }).required(),
  goalAmount: Joi.number().positive().required(),
  duration: Joi.number().integer().positive().required()
});

// Donation validation schema
const donationSchema = Joi.object({
  campaignId: Joi.number().integer().min(0).required(),
  amount: Joi.string().required(),
  donor: Joi.string().custom((value, helpers) => {
    if (!isValidAddress(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }).required()
});

module.exports = {
  isValidAddress,
  isValidAmount,
  campaignSchema,
  donationSchema
};
