import { EventEmitter } from 'events';

class FileReader extends EventEmitter {
  constructor() {
    super();
    console.log('initializing file reader niggas');
  }

  readAsBinaryString() {
  }
}

export default FileReader;
