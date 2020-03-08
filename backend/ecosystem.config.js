module.exports = {
  apps: [{
    name: 'backend',
    script: 'app.js',
    instances: 5,
    autorestart: true,
    watch: false,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
