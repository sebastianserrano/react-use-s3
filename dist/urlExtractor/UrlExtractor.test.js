const UrlExtractor = require('./UrlExtractor.js');

describe('Url Extractor', () => {
  it('should extract file location from presigned url', () => {
    const urlExtractor = new UrlExtractor();
    const presignedUrl = 'https://lambda-s3-0.s3.us-east-2.amazonaws.com/pic.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQV5F6T53542MBDN3%2F20190731%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20190731T002736Z&X-Amz-Expires=300&X-Amz-Signature=261333f9e5857cab2de2084c54b3af284dad7399e5c4615eab90a777aced8f8e&X-Amz-SignedHeaders=host';

    const fileLocation = urlExtractor.extractFileLocationFromPresignedUrl(presignedUrl);

    expect(fileLocation).toEqual('https://lambda-s3-0.s3.us-east-2.amazonaws.com/pic.jpeg');
  });
});
