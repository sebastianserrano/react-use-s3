class UrlExtractor {
  constructor() {
    this.regex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}).*?(?=\?)/, 'gi');
  }

  extractFileLocationFromPresignedUrl(presignedUrl) {
    if (this.regexMatchesPresignedUrl(presignedUrl)) {
      const fileLocation = presignedUrl.match(this.regex)[0];

      return fileLocation;
    }
    return 'Could not extract file location from presigned url';
  }

  regexMatchesPresignedUrl(url) {
    return this.regex.test(url);
  }
}

module.exports = UrlExtractor;
