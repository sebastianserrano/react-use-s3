import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

function FilePicker(props) {
  const { fileName, setFile, setFileName } = props;

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = () => {
      const binaryFile = reader.result;
      setFile(binaryFile);
    };

    acceptedFiles.forEach((file) => {
      setFileName(file.name);
      return reader.readAsBinaryString(file);
    });
  }, [setFile, setFileName]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div id="file-picker" {...getRootProps()}>
      <div className="container-fluid inherit-height">
        <input {...getInputProps()} />
        <div className="row align-content-center inherit-height">
          <p className="text-center" id="file-picker-title">
            {fileName !== '' ? fileName : 'Drag n drop a file here, or click to select file' }
          </p>
        </div>
      </div>
    </div>
  );
}

FilePicker.propTypes = {
  fileName: PropTypes.string.isRequired,
  setFile: PropTypes.func.isRequired,
  setFileName: PropTypes.func.isRequired,
};

export default FilePicker;
