/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
    s3: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      bucket: process.env.S3_BUCKET_NAME,
      region: 'us-east-1',
      filePattern: '**/*.{js,css,json,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2}',
    },

    gzip: {
      ignorePattern: 'index.json'
    },

  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
