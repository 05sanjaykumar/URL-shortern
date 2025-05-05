const { saveUrl: redisSaveUrl, getUrlByCode: redisGetUrlByCode } = require('./redisService');
const nanoid = async () => {
    const { nanoid } = await import('nanoid');
    return nanoid;
  };
  
const generateShortCode = async () => {
    const nano = await nanoid();
    return nano(6);  // nanoid(6) generates a 6-character short code
};

const saveUrl = async (code, url) => {
    // Use Redis to store the URL
    await redisSaveUrl(code, url);
  };
  
  const getUrlByCode = async (code) => {
    // Fetch URL from Redis
    const url = await redisGetUrlByCode(code);
    return url;
  };
  

module.exports = { generateShortCode, saveUrl, getUrlByCode };
