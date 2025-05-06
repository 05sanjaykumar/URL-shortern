const { generateShortCode, saveUrl, getUrlByCode } = require('../services/urlServices');

const shortenUrl = async (req, res) => {
    try {
      console.log('Received request:', req.body);
      const { originalUrl } = req.body;
  
      if (typeof originalUrl !== 'string') {
        return res.status(400).json({ error: 'Invalid input: originalUrl must be a string' });
      }
  
      const code = await generateShortCode(); // make sure generateShortCode is async
      await saveUrl(code, originalUrl);
  
      console.log('Short URL saved');
      res.json({ shortUrl: `http://localhost:3000/${code}` });
    } catch (err) {
      console.error('Error in shortenUrl:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

const redirectToUrl = async (req,res)=>{
    const code = req.params.code;
    const originalUrl = await getUrlByCode(code); // Use the Redis get function

    if (originalUrl) {
        res.redirect(originalUrl);
      } else {
        res.status(404).json({ error: 'URL not found' });
    }
};

module.exports = { shortenUrl, redirectToUrl };
