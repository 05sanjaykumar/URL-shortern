const nanoid = async () => {
    const { nanoid } = await import('nanoid');
    return nanoid;
  };
  
  const generateShortCode = async () => {
    const nano = await nanoid();
    return nano(6);  // nanoid(6) generates a 6-character short code
};

const saveUrl = (code, url) => {
    urlDatabase[code] = url;
};


const getUrlByCode = (code) => {
    return urlDatabase[code];
};

module.exports = { generateShortCode, saveUrl, getUrlByCode };
