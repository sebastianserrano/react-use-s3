const { EventEmitter } = require('events');

const data = {
  Location: 'https://aws.com',
};

class Upload extends EventEmitter {
  send(callback) {
    callback(null, data);
  }
}
const _Upload = new Upload();
function upload() {
  return _Upload;
}

window.s3 = {
  upload,
};
