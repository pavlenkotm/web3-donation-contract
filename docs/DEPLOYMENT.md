# 🚀 Deployment Guide

## Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- MongoDB
- Redis
- Foundry (для контрактов)

## Local Development

### 1. Clone Repository

```bash
git clone https://github.com/pavlenkotm/web3-donation-contract.git
cd web3-donation-contract
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Создайте `.env` файлы для каждого сервиса:

**apps/backend/.env**
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/donation-ecosystem
REDIS_URL=redis://localhost:6379
RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
JWT_SECRET=your-secret-key
```

**apps/frontend/.env**
```env
VITE_API_URL=http://localhost:3001
VITE_WALLET_CONNECT_PROJECT_ID=your-project-id
```

**apps/analytics/.env**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/donation-ecosystem
```

### 4. Start Services

**Option A: Using Docker Compose (Recommended)**

```bash
docker-compose up -d
```

**Option B: Manual Start**

```bash
# Terminal 1 - Backend
cd apps/backend && npm run dev

# Terminal 2 - Frontend
cd apps/frontend && npm run dev

# Terminal 3 - Admin Dashboard
cd apps/admin-dashboard && npm run dev

# Terminal 4 - Analytics
cd apps/analytics && python main.py

# Terminal 5 - Notifications
cd apps/notifications && npm run dev
```

## Production Deployment

### Deploy Smart Contracts

```bash
cd apps/contracts

# Compile
forge build

# Deploy to testnet
forge script script/Deploy.s.sol:DeployScript \
  --rpc-url $TESTNET_RPC_URL \
  --broadcast \
  --verify

# Update contract addresses in packages/shared/src/constants.js
```

### Deploy Backend Services

#### Using Docker

```bash
# Build all services
docker-compose build

# Start production
docker-compose -f docker-compose.prod.yml up -d
```

#### Using Cloud Providers

**Heroku Example:**

```bash
# Backend
cd apps/backend
heroku create donation-backend
git push heroku main

# Analytics
cd apps/analytics
heroku create donation-analytics
heroku buildpacks:set heroku/python
git push heroku main
```

**AWS/GCP/Azure:**

1. Build Docker images
2. Push to container registry
3. Deploy to ECS/Cloud Run/AKS
4. Configure environment variables
5. Set up load balancer

### Deploy Frontend

**Vercel (Recommended for Frontend):**

```bash
cd apps/frontend
vercel --prod
```

**Netlify:**

```bash
cd apps/frontend
npm run build
netlify deploy --prod --dir=dist
```

**AWS S3 + CloudFront:**

```bash
cd apps/frontend
npm run build
aws s3 sync dist/ s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id XXX --paths "/*"
```

### Deploy Admin Dashboard

Same as frontend, or self-host with nginx:

```bash
cd apps/admin-dashboard
npm run build

# Copy to nginx
sudo cp -r dist/* /var/www/admin-dashboard/
```

## Database Setup

### MongoDB

```bash
# Local
mongod --dbpath /path/to/data

# Cloud - MongoDB Atlas
# 1. Create cluster at mongodb.com
# 2. Get connection string
# 3. Update MONGODB_URI in .env
```

### Redis

```bash
# Local
redis-server

# Cloud - Redis Cloud
# 1. Create instance at redis.com
# 2. Get connection string
# 3. Update REDIS_URL in .env
```

## Environment Configuration

### Production Environment Variables

Create `.env.production` files with production values:

- API URLs (production domains)
- Database connection strings
- RPC URLs (mainnet)
- Contract addresses (deployed)
- API keys (production)
- Secret keys (strong random)

### Security Checklist

- [ ] Change all default passwords
- [ ] Use strong JWT secrets
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable firewall
- [ ] Backup database regularly
- [ ] Monitor logs
- [ ] Set up alerts

## Monitoring

### Application Monitoring

```bash
# Install monitoring tools
npm install -g pm2

# Start with PM2
pm2 start apps/backend/src/index.js --name backend
pm2 start apps/notifications/src/index.js --name notifications

# Monitor
pm2 monit
```

### Logs

```bash
# Docker logs
docker-compose logs -f

# PM2 logs
pm2 logs

# Application logs
tail -f apps/backend/logs/app.log
```

## Scaling

### Horizontal Scaling

```yaml
# docker-compose.scale.yml
services:
  backend:
    deploy:
      replicas: 3

  analytics:
    deploy:
      replicas: 2
```

```bash
docker-compose -f docker-compose.yml -f docker-compose.scale.yml up -d
```

### Load Balancing

Use nginx or cloud load balancer:

```nginx
upstream backend {
    server backend1:3001;
    server backend2:3001;
    server backend3:3001;
}

server {
    listen 80;
    location /api {
        proxy_pass http://backend;
    }
}
```

## Backup & Recovery

```bash
# MongoDB backup
mongodump --uri="$MONGODB_URI" --out=/backup/$(date +%Y%m%d)

# Redis backup
redis-cli --rdb /backup/dump.rdb

# Restore MongoDB
mongorestore --uri="$MONGODB_URI" /backup/20240101
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   lsof -i :3001
   kill -9 <PID>
   ```

2. **MongoDB connection failed**
   - Check MongoDB is running
   - Verify connection string
   - Check firewall rules

3. **Contract interaction fails**
   - Verify RPC URL
   - Check contract addresses
   - Ensure sufficient gas

4. **Docker build fails**
   - Clear cache: `docker system prune -a`
   - Check Dockerfile syntax
   - Verify base images

## Support

For issues and questions:
- GitHub Issues: https://github.com/pavlenkotm/web3-donation-contract/issues
- Documentation: /docs folder
