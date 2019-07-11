const { useEffect } = require('react');

function useAWSScript(props) {
  const { load, credentials } = props;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.amazonaws.com/js/aws-sdk-2.480.0.min.js';
    script.async = true;
    script.addEventListener('load', () => {
      window.s3 = new window.AWS.S3(credentials);
      load(true);
    });
    script.addEventListener('error', () => {
      load(false);
    });
    document.body.appendChild(script);
  }, [load, credentials]);
}

module.exports = useAWSScript;
