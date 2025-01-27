const config = {
  include: [
    '/',
    '/blog/',
    '/world-news/',
  ],
  puppeteerArgs: process.env.NODE_ENV === 'production' 
    ? ['--no-sandbox', '--disable-setuid-sandbox']
    : []
};

module.exports = config;