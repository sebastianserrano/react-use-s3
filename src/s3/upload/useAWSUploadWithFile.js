import { useCallback } from 'react';

function useAWSUploadWithFile(props){
  const { file, setFileLocation, setResult } = props;
  const params = {Bucket: 'bucket-name', Key: 'file', Body: file};

  const callback = useCallback(() => {
    window.s3.upload(params).on('httpUploadProgress', (event) => {
      let progress = parseInt((event.loaded * 100) / event.total);
      setResult(progress)
    }).send(function(error, data) {
      setFileLocation(data.Location)
    })
  }, [setResult, setFileLocation, params])

  return callback
}

export default useAWSUploadWithFile;
