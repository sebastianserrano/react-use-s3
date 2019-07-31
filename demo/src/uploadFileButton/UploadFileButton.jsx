import React from 'react';
import PropTypes from 'prop-types';
import useUploadS3WithPresignedUrl from 'react-use-s3';

function UploadFileButton(props) {
  const {
    url,
    progress,
    file,
    setResponse,
    setProgress,
  } = props;

  const handleClick = useUploadS3WithPresignedUrl({
    url,
    file,
    setResponse,
    setProgress,
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <button
          disabled={!url}
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
  url: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  setResponse: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default UploadFileButton;
