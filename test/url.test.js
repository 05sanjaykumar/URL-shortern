const {generateShortCode} = require('../src/services/urlServices')

jest.mock('../src/services/redisService', () => ({
  saveUrl: jest.fn().mockResolvedValue(),
  getUrlByCode: jest.fn().mockResolvedValue('https://example.com'),
}));

test('short code should be 6 chars', async () => {
    const code = await generateShortCode();
    expect(code).toHaveLength(6);
  });