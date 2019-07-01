import { EventEmitter } from 'events';

const data = {
  Location: "https://aws.com"
}

class Upload extends EventEmitter {
  send(callback){
    callback(null, data)
  }
}
const _Upload = new Upload()
const upload = function(params){
  return _Upload
}

window.s3 = {
  upload: upload
}
