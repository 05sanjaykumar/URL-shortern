const {generateShortCode} = require('../src/services/urlServices')

test('short code should be 6 chars', async () => {
    const code = await generateShortCode();
    expect(code).toHaveLength(6);
  });