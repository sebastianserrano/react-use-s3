import React from 'react';
import PropTypes from 'prop-types';
import { useAWSUploadWithFile } from 'react-use-s3';

function UploadFileButton(props) {
  const {
    progress,
    scriptStatus,
    file,
    fileName,
    setFileLocation,
    setProgress,
  } = props;

  const handleClick = useAWSUploadWithFile({
    bucket: 'bucket',
    file,
    fileName,
    setFileLocation,
    setProgress,
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <button
          disabled={!scriptStatus || false}
          type="button"
          className="btn btn-primary btn-block"
          id="upload-button"
          onClick={() => handleClick()}
        >
          {progress === 'In Progress' ? 'Upload File' : progress}
        </button>
      </div>
    </div>
  );
}

UploadFileButton.propTypes = {
  progress: PropTypes.string.isRequired,
  scriptStatus: PropTypes.bool.isRequired,
  file: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  setFileLocation: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default UploadFileButton;
