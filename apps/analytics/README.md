# 📊 Analytics Service

Python микросервис для аналитики данных donation ecosystem.

## Технологии

- **FastAPI** - Modern Python web framework
- **Pandas** - Data analysis
- **NumPy** - Numerical computing
- **Web3.py** - Ethereum interaction
- **Scikit-learn** - ML predictions
- **MongoDB** - Database
- **Redis** - Caching

## Установка

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Запуск

```bash
# Development
python main.py

# Production with gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

## API Endpoints

### Statistics
- `GET /api/stats/overview` - Общая статистика
- `GET /api/stats/trends?days=30` - Тренды донатов
- `GET /api/stats/campaigns/{id}` - Статистика кампании

### Analytics
- `GET /api/analytics/top-donors` - Топ доноров
- `GET /api/analytics/campaign-performance` - Производительность кампаний
- `GET /api/analytics/predictions` - ML предсказания

## Функции

- Агрегация данных о донатах
- Анализ трендов
- ML предсказание успеха кампаний
- Визуализация данных
- Real-time статистика
- Кэширование результатов

## Порт

Default: **5000**
