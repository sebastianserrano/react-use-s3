import React from 'react';
import PropTypes from 'prop-types';

function PresignedUrlInput(props) {
  const { setPresignedUrl } = props;

  const handleChange = (event) => {
    const url = event.target.value;

    setPresignedUrl(url);
  };

  return (
    <input
      type="text"
      onChange={event => handleChange(event)}
      id="presigned-url"
      className="form-control text-center"
      placeholder="Presigned Url"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  );
}

PresignedUrlInput.propTypes = {
  setPresignedUrl: PropTypes.func.isRequired,
};

export default PresignedUrlInput;
