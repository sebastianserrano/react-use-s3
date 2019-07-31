import React, { useState } from 'react';
import PresignedUrlInput from './presignedUrlInput/PresignedUrlInput';
import FilePicker from './filePicker/FilePicker';
import UploadFileButton from './uploadFileButton/UploadFileButton';
import NotificationSystem from './notificationSystem/NotificationSystem';
import Confetti from './confetti/Confetti';

function App() {
  const [file, setFile] = useState({ name: '', type: '', data: '' });
  const [presignedUrl, setPresignedUrl] = useState('');
  const [response, setResponse] = useState({ status: 0, responseText: '' });
  const [progress, setProgress] = useState('In Progress');

  return (
    <div className="container-fluid text-center" id="main-container">
      <NotificationSystem response={response} />
      {response.status === 200 ? <Confetti /> : null}
      <div className="row justify-content-center">
        <h1 className="text-center" id="title">React S3</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-5 col-10">
          <PresignedUrlInput setPresignedUrl={setPresignedUrl} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-11">
          <FilePicker setFile={setFile} />
          <UploadFileButton
            url={presignedUrl}
            progress={progress}
            file={file}
            setResponse={setResponse}
            setProgress={setProgress}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
