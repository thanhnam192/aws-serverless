
// load the AWS SDK
const AWS = require('aws-sdk')

// load CloudFront key pair from environment variables
// Important: when storing your CloudFront private key as an environment variable string, 
// you'll need to replace all line breaks with \n, like this:
// CF_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIE...1Ar\nwLW...2eL\nFOu...k2E\n-----END RSA PRIVATE KEY-----"
fs = require('fs');
const cloudfrontAccessKeyId = 'APKAJWaET33JaKH4ILYJMA';
const cloudFrontPrivateKeyUrl = './pk-APKAJWET3a3JKH4IaLYJMA.pem';
const data = fs.readFileSync(cloudFrontPrivateKeyUrl);
console.log(data.toString());
const signer = new AWS.CloudFront.Signer(cloudfrontAccessKeyId, data.toString());

// console.log(data.toString());
// 2 days as milliseconds to use for link expiration
const twoDays = 2*24*60*60*1000

// sign a CloudFront URL that expires 2 days from now
const signedUrl = signer.getSignedUrl({
  url: 'http://d1d8w4xdimym93.cloudfront.net/videoplayback.mp4',
  expires: Math.floor((Date.now() + twoDays)/1000), // Unix UTC timestamp for now + 2 days
})

console.log(signedUrl);