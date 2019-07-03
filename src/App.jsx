import React, { useState } from 'react';
import S3 from './s3/S3';
import FilePicker from './FilePicker';
import UploadFileButton from './UploadFileButton';
import NotificationSystem from './NotificationSystem';
import Confetti from './Confetti';

function App() {
  const [loaded, load] = useState(false);
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileLocation, setFileLocation] = useState('');
  const [progress, setProgress] = useState('In Progress');

  S3({ load, credentials: { accessKeyId: '', secretAccessKey: '' } });

  return (
    <div className="container-fluid text-center" id="main-container">
      <NotificationSystem fileLocation={fileLocation} />
      {fileLocation !== '' ? <Confetti /> : null}
      <div className="row">
        <h1 className="text-center" id="title">React S3</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <FilePicker fileName={fileName} setFile={setFile} setFileName={setFileName} />
          <UploadFileButton
            progress={progress}
            scriptStatus={loaded}
            file={file}
            fileName={fileName}
            setFileLocation={setFileLocation}
            setProgress={setProgress}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
