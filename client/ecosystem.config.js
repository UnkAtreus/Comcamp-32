module.exports = {
    apps: [{
      name: 'frontend',
      script: 'serve -l 3000 -s ./build',
      instances: 3,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  };
  