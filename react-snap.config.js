const config = {
  include: [
    '/',
    '/blog/',
    '/world-news/',
  ],
  puppeteerArgs: process.env.CI 
    ? ['--no-sandbox', '--disable-setuid-sandbox']
    : []
};

module.exports = config;