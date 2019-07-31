const { useCallback } = require('react');
const UrlExtractor = require('./urlExtractor/UrlExtractor.js');

function useUploadS3WithPresignedUrl(props) {
  const {
    url,
    file,
    setResponse,
    setProgress,
  } = props;

  const callback = useCallback(() => {
    const request = new XMLHttpRequest();
    request.open('PUT', url, true);
    request.setRequestHeader('Content-Type', file.type);
    request.onerror = () => {
      setResponse({
        status: 403,
        responseText: 'Upload server error, please try again later',
      });
    };
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        setResponse({
          status: 200,
          responseText: new UrlExtractor().extractFileLocationFromPresignedUrl(url),
        });
      } else if (request.readyState === 4 && request.status !== 200) {
        setResponse({
          status: 403,
          responseText: 'Upload server error, please check your presigned url',
        });
      }
    };
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setProgress(progress);
      }
    };
    request.send(file.data);
  }, [file, url, setProgress, setResponse]);

  return callback;
}

module.exports = useUploadS3WithPresignedUrl;
