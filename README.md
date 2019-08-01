<h1 align="center">Welcome to react-s3 👋</h1>
<p align="center">
  <img src="/docs/react-s3-v2.gif" alt="React S3"/>
</p>
<p>
  <img src="https://img.shields.io/badge/version-2.0.8-blue.svg?cacheSeconds=2592000" />
</p>

> React custom hooks for uploading files to a s3 bucket with progress showing abilities

## Install

```sh
npm i react-use-s3
```

## Usage

```javascript

import useUploadS3WithPresignedUrl from 'react-use-s3'; //ES6

const url = 'your presigned url here';
const file = { name: '', type: '', data: '' }
const [progress, setProgress] = useState('In Progress'); //useState hook to indicate progress of file while uploading
const [response, setResponse] = useState({ status: 0, responseText: '' }); //useState hook to indicate upload response when 
					      			           //request is done whether is successful or not

//Upon successful upload request, setResponse will set the response as:
{
  status: 200,
  responseText: 'https://{bucket}.{region}.amazonaws.com/{fileName}.{fileExtension}'
}

//Upon unsucessful upload request, setResponse will set the response as:
{
  status: 403,
  responseText: 'Upload server error, please check your presigned url'
}
					      //request is done whether is successful or not

const handleClick = useUploadS3WithPresignedUrl({
  url,
  file,
  setResponse,
  setProgress,
});

<button onClick={() => handleClick()}> My Upload File Button </button>

```
## Demo

This demo implies that you have the following configuration on your s3 bucket before upload:

Bucket Policy:

```sh
{
    "Version": "2012-10-17",
    "Id": "Policy1561076265996",
    "Statement": [
        {
            "Sid": "Stmt1561076264365",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::[your bucket name here]/*"
        }
    ]
}
```

CORS:

```sh
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <ExposeHeader>x-amz-server-side-encryption</ExposeHeader>
    <ExposeHeader>x-amz-request-id</ExposeHeader>
    <ExposeHeader>x-amz-id-2</ExposeHeader>
    <ExposeHeader>ETag</ExposeHeader> #This is needed in order to upload heavy files
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

In order to install and run the demo app locally you can do the following:

```sh
npm install
```

```sh
npm run test
```

```sh
npm run start
```

So why the Dockerfile? It was running on my machine said every dev. If you wish to run the demo app
on a container, all you have to do is the following:

```sh
docker build -t react-s3-demo .
docker run -it -p 8080:80 react-s3-demo
```
At this point, all you have to do is go to localhost:8080 in your browser and there you go. You can
upload your files to s3 your bucket while having the ability to show progress

## Code Style
```
eslint-config-standard
```

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
