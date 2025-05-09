// src/services/redisService.js
import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Await connection once at top-level
await client.connect();

export const saveUrl = async (code, url) => {
  await client.set(code, JSON.stringify({ originalUrl: url }), {
    EX: 3600, // expires in 1 hour
  });
};

export const getUrlByCode = async (code) => {
  const data = await client.get(code);
  if (!data) return null;
  const parsed = JSON.parse(data);
  return parsed.originalUrl;
};
