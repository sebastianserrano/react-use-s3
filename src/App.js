import React, { useState } from 'react';
import './App.css';
import S3 from './s3/s3';
import FilePicker from './FilePicker';
import UploadFileButton from './UploadFileButton';

function App() {
  const [loaded, load] = useState(false);
  const [file, setFile] = useState("");
  const [fileLocation, setFileLocation] = useState("To Be Determined");
  const [result, setResult] = useState('In Progress');

  S3({ load: load, options: {}});

  return (
    <div className="App">
      {loaded ? <UploadFileButton file={file} setFileLocation={setFileLocation} setResult={setResult} /> : <h1>loading</h1>}
      <FilePicker setFile={setFile} />
      <h1>{result}</h1>
      <h1>{fileLocation}</h1>
    </div>
  );
}

export default App;
