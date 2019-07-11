const { useCallback } = require('react');

function useAWSUploadWithFile(props) {
  const {
    bucket,
    file,
    fileName,
    setFileLocation,
    setProgress,
  } = props;

  const params = { Bucket: bucket, Key: fileName, Body: file };

  const callback = useCallback(() => {
    window.s3.upload(params).on('httpUploadProgress', (event) => {
      const progress = parseInt((event.loaded * 100) / event.total, 10);
      setProgress(progress);
    }).send((error, data) => {
      setFileLocation(data.Location);
    });
  }, [setProgress, setFileLocation, params]);

  return callback;
}

module.exports = useAWSUploadWithFile;
