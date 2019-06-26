import React from 'react';
import Script from 'react-load-script';
import PropTypes from 'prop-types';

function onError(){
  console.log("There was a problem while loading the aws javascript sdk");
}

function onLoad(apiVersion){
  window.s3 = new window.AWS.S3({apiVersion: apiVersion})
}

function s3(props){
  const { apiVersion } = props;

  return(
    <Script
      url="https://sdk.amazonaws.com/js/aws-sdk-2.480.0.min.js"
      onError={() => onError()}
      onLoad={() => onLoad(apiVersion ? apiVersion : '2006-03-01')}
    /> 
  )
}

s3.propTypes = {
  apiVersion: PropTypes.string
};

export default s3;
