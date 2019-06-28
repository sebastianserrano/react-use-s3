import React from 'react';
import useAWSUploadWithFile from './s3/upload/useAWSUploadWithFile';

function UploadFileButton(props){
  const { file, setFileLocation, setResult } = props;

  const handleClick = useAWSUploadWithFile({ file: file, setFileLocation: setFileLocation, setResult: setResult });
  return(
    <button onClick={() => handleClick()}>
      Upload File
    </button>
  )
}

export default UploadFileButton;
