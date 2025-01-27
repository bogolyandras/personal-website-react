const commonConfig = {
  include: [
    '/',
    '/blog/',
    '/world-news/',
  ]
};

const ciPuppeteerArgs = [
  '--no-sandbox',
  '--disable-setuid-sandbox'
];

const config = {
  ...commonConfig,
  puppeteerArgs: process.env.CI ? ciPuppeteerArgs : ['--no-sandbox',
  '--disable-setuid-sandbox']
};