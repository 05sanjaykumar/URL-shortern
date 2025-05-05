const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient()

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on('connect', function () {
    console.log('Connected to Redis');
});

client.on('error', function (err) {
    console.log('Redis error: ' + err);
});

const saveUrl = async (code, url) => {
    await setAsync(code, url);
};

const getUrlByCode = async (code) => {
    const url = await getAsync(code);
    return url;
}

module.exports = { saveUrl, getUrlByCode };