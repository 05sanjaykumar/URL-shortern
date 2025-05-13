
# 🔗 Scalable URL Shortener

A high-performance, scalable URL Shortener (like Bit.ly), designed not just to work — but to **teach** modern backend engineering concepts.

---

## 🚀 Project Goal

This isn't just about shortening URLs — it's about mastering:

- **System Design** (scalability, caching, reliability)
- **Cloud Architecture** (Docker, Redis, NGINX, AWS/GCP)
- **Backend Engineering** (testing, modularity, rate limiting)
- **DevOps** (CI/CD, containerization, deployment)
- **Performance Optimization** (concurrency, fault tolerance)

---

## 📁 Directory Structure

```

.
├── docker-compose.yml         # Multi-container setup (Redis + Node.js)
├── Dockerfile                 # Docker image for Node.js backend
├── server.js                  # Entry point
├── package.json               # Dependencies
├── src/
│   ├── app.js                 # Express app setup
│   ├── controllers/           # Route controllers
│   ├── routes/                # Express routes
│   ├── services/              # Redis + core logic
│   ├── middleware/            # Rate limiting etc.
│   └── utils/                 # Helper modules (e.g. ID generation)
└── test/
├── **mock**/              # Redis mock
└── url.test.js            # Jest test suite

````

---

## ✅ Completed Features

| Feature                         | Status       | Description |
| ------------------------------ | ------------ | ----------- |
| URL Shortening (POST)          | ✅ Done       | Generates a short code for long URL |
| URL Redirect (GET)             | ✅ Done       | Redirects user using short code |
| Redis Integration              | ✅ Done       | Used for caching and short-term storage |
| Docker Support                 | ✅ Done       | Fully containerized with Docker |
| Unit & API Testing (Jest)      | ✅ Done       | Tests added for core functionality |
| Input Validation               | ✅ Done       | Ensures valid URLs are submitted |

---

## 🔧 Upcoming Features

| Feature                        | Description |
| ----------------------------- | ----------- |
| 🔐 HTTPS + NGINX              | Use NGINX as a reverse proxy, enable SSL for production-ready server |
| ☁️ Cloud Deployment           | Deploy to platforms like EC2, Railway, or Render |
| 📈 Analytics (Optional)       | Track clicks, referrer, geolocation using Redis Streams or Kafka |
| 📎 Custom Aliases             | Allow users to specify `/custom-alias` instead of random codes |
| 📆 URL Expiration             | Auto-expire old URLs via Redis TTL |
| 📸 QR Code Generator          | Generate a QR code for each shortened URL |
| ⚙️ CI/CD + GitHub Actions     | Set up auto-deploy pipeline for production environments |
| 🧠 System Design Deep Dive     | Break into microservices, sharding, Kafka, etc. for scale-out scenarios |

---

## 🧪 Tech Stack

- **Node.js / Express** – Core backend
- **Redis** – Fast in-memory store and cache
- **Docker** – Containerized backend and Redis
- **Jest + Supertest** – Unit & integration testing
- **NGINX (upcoming)** – Reverse proxy + HTTPS
- **AWS/GCP/Render (upcoming)** – Deployment & scaling

---

## 🐳 Docker Quick Start

```bash
# Start server and Redis together
docker-compose up --build
````

Server runs on: `http://localhost:3000`
Redis on: `localhost:6379`

---

## 🧠 Learning Milestones

This project is a learning playground for:

* ✅ Redis caching, TTL, and data modeling
* ✅ Docker + docker-compose orchestration
* 🔜 NGINX and SSL termination
* 🔜 Rate limiting with Redis
* 🔜 Cloud deployment strategy
* 🔜 Building analytics using Redis Streams/Kafka
* 🔜 Event-driven architecture & microservices (advanced)

---

## 💡 Endpoints

### `POST /shorten`

Shorten a long URL.

```json
{
  "url": "https://example.com"
}
```

Returns:

```json
{
  "shortCode": "abc123"
}
```

---

### `GET /:code`

Redirects to the original long URL.

---

## 👨‍💻 Author

**Sanjay** — A curious self-learner and explorer.

---

## 📌 License

This project is licensed under the MIT License.

`


