# 🤝 Contributing Guide

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch
4. Make your changes
5. Submit a pull request

## Development Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Start development
npm run dev
```

## Code Style

### JavaScript/TypeScript
- Use ES6+ features
- Follow Airbnb style guide
- Use meaningful variable names
- Add comments for complex logic

### Solidity
- Follow Solidity style guide
- Use natspec comments
- Test all functions
- Avoid gas-heavy operations

### Python
- Follow PEP 8
- Use type hints
- Write docstrings
- Keep functions small

## Commit Messages

Follow conventional commits:

```
feat: add new campaign feature
fix: resolve donation bug
docs: update README
style: format code
refactor: improve performance
test: add unit tests
chore: update dependencies
```

## Pull Request Process

1. Update documentation
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review

## Testing

```bash
# Frontend
cd apps/frontend && npm test

# Backend
cd apps/backend && npm test

# Contracts
cd apps/contracts && forge test

# Analytics
cd apps/analytics && pytest
```

## Reporting Bugs

Use GitHub Issues with:
- Clear title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details

## Feature Requests

Open an issue with:
- Clear description
- Use cases
- Proposed solution
- Alternatives considered
