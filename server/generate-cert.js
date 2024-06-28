// generate-cert.js
const selfsigned = require('selfsigned');
const fs = require('fs');

const attrs = [{ name: 'commonName', value: 'localhost' }];
const options = {
  days: 365,
  keySize: 2048,
  algorithm: 'sha256',
};

selfsigned.generate(attrs, options, (err, pems) => {
  if (err) {
    console.error('Error generating certificate:', err);
    return;
  }

  fs.writeFileSync('key.pem', pems.private);
  fs.writeFileSync('cert.pem', pems.cert);
  console.log('Certificates generated successfully');
});
