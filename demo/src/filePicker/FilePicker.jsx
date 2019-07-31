import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

function FilePicker(props) {
  const [temporaryFile, setTemporaryFile] = useState({ name: '', type: '' });
  const { setFile } = props;

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = () => {
      const binaryFile = reader.result;

      setFile({
        name: temporaryFile.name,
        type: temporaryFile.type,
        data: binaryFile,
      });
    };

    acceptedFiles.forEach((file) => {
      setTemporaryFile({
        name: file.name,
        type: file.type,
      });
      return reader.readAsBinaryString(file);
    });
  }, [setFile, temporaryFile]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div data-testid="file-picker" id="file-picker" {...getRootProps()}>
      <div className="container-fluid inherit-height">
        <input data-testid="file-picker-input" {...getInputProps()} />
        <div className="row align-content-center inherit-height">
          <p data-testid={temporaryFile.name} className="text-center" id="file-picker-title">
            {temporaryFile.name !== '' ? temporaryFile.name : 'Drag n drop a file here, or click to select file' }
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
