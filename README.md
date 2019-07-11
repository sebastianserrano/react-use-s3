<h1 align="center">Welcome to react-s3 👋</h1>
<p align="center">
  <img src="/docs/react-s3.gif" alt="React S3"/>
</p>
<p>
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> React custom hooks for uploading files to a s3 bucket with progress showing abilities

## Install

```sh
npm i react-use-s3
```

## Usage

```javascript

import { useAWSScript, useAWSUploadWithFile } from 'react-use-s3'; //ES6

const [loaded, load] = useState(false); // useState hook to indicate to parent component when the 
					   script has successfully loaded

useAWSScript({ load, credentials: { accessKeyId: '', secretAccessKey: '' } });

const bucket = 'your s3 bucket name here';
const [file, setFile] = useState('');
const [fileName, setFileName] = useState('');
const [fileLocation, setFileLocation] = useState('');
const [progress, setProgress] = useState('In Progress');

const handleClick = useAWSUploadWithFile({
  bucket: 'bucket',
  file,
  fileName,
  setFileLocation,
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

In order to use this demo, the credentials used by the 'useAWSScript' custom hook in the main App
file have to be changed to your personal keys. Also, set your bucket name for the 'useAWSUploadWithFile' 
custom hook on line 16 of the UploadFileButton. This demo uses the latest minified version of the aws js sdk which at the moment is 2.480.0. 

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
on a container, all you have to do is again, set your credentials in the main App and 
set your bucket name on line 16 of the UploadFileButton. This will change in a future version of the demo, then:

```sh
docker build -t react-s3-demo .
docker run -it -p 8080:80 react-s3-demo
```
At this point, all you have to do is go to localhost:8080 in your browser and there you go. You can
upload your files to s3 your bucket while having the ability to show progress

## Author

👤 **Sebastian Serrano**

* Github: [@sebastianserrano](https://github.com/sebastianserrano)

## Show your support

Give a ⭐️ if this project helped you !
