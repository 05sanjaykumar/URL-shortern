const { generateShortCode, saveUrl, getUrlByCode } = require('../services/urlServices');

const shortenUrl = (req,res)=>{
    const {originalUrl} = req.body;
    const code = generateShortCode();
    saveUrl(code, originalUrl);
    res.json({ shortUrl: `http://localhost:3000/${code}` });
}

const redirectToUrl = (req,res)=>{
    const code = req.params.code;
    const originalUrl = getUrlByCode(code);

    if (originalUrl) {
        res.redirect(originalUrl);
      } else {
        res.status(404).json({ error: 'URL not found' });
    }
};

module.exports = { shortenUrl, redirectToUrl };
