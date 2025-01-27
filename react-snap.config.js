const config = process.env.CI
  ? {
      include: [
        '/',
        '/blog/',
        '/world-news/',
      ],
      puppeteerArgs: [
        "--no-sandbox",
        "--disable-setuid-sandbox"
      ]
    }
  : {
      include: [
        '/',
        '/blog/',
        '/world-news/',
      ],
      puppeteerArgs: []
    };

module.exports = config;