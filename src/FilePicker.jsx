import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';

function FilePicker(props) {
  const { setFile } = props;

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const binaryFile = reader.result
      setFile(binaryFile)
    }

    acceptedFiles.forEach(file => reader.readAsBinaryString(file))
  }, [setFile])
  const {getRootProps, getInputProps } = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default FilePicker;
