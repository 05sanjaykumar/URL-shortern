const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

// Important: Connect before using client
(async () => {
    await client.connect();
})();

// Save URL as a string
const saveUrl = async (code, url) => {
    // No need to check typeof here; just always store as JSON string
    await client.set(code, JSON.stringify({ originalUrl: url }));
};

// Get URL
const getUrlByCode = async (code) => {
    const data = await client.get(code);
    if (!data) return null;
    const parsed = JSON.parse(data);
    return parsed.originalUrl;
};

module.exports = { saveUrl, getUrlByCode };
