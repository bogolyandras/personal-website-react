module.exports = {
    include: [
        '/',
        '/blog/',
        '/world-news/',
    ],
};

const config = process.env.CI
  ? require('./package.json').reactSnapCI 
  : require('./package.json').reactSnap;

module.exports = config;