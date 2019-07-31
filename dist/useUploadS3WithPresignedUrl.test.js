const sinon = require('sinon');
const { renderHook, act } = require('@testing-library/react-hooks');
const useUploadS3WithPresignedUrl = require('./useUploadS3WithPresignedUrl');

const props = {
  url: 'https://lambda-s3-0.s3.us-east-2.amazonaws.com/pic.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQV5F6T53542MBDN3%2F20190729%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20190729T195346Z&X-Amz-Expires=300&X-Amz-Signature=17e6e3665d476b9648bd4e9e6b3f3153c4c4f7fef947b127e64e464698d1ef14&X-Amz-SignedHeaders=host',
  file: {
    name: 'mockedFileName',
    type: 'image/jpeg',
    data: '',
  },
  setResponse: jest.fn(),
  setProgress: jest.fn(),
};

const requests = [];

beforeAll(() => {
  const mockedXMLHttpRequest = sinon.useFakeXMLHttpRequest();
  mockedXMLHttpRequest.onCreate = (request) => {
    requests.push(request);
  };
  global.XMLHttpRequest = mockedXMLHttpRequest;
});

describe('Use Upload S3 Presigned Url', () => {
  it('should be called with exact presigned url', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });

    expect(requests[0].url).toEqual(props.url);
  });

  it('should be called with PUT method', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });

    expect(requests[1].method).toEqual('PUT');
  });

  it('should be called with correct request headers', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });

    expect(requests[2].requestHeaders).toEqual(
      expect.objectContaining({
        'Content-Type': 'image/jpeg;charset=utf-8',
      }),
    );
  });

  it('should be called asynchronously', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });

    expect(requests[3].async).toEqual(true);
  });

  it('onerror should set a reponse with status 403', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });

    requests[4].error();

    expect(props.setResponse.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        status: 403,
        responseText: 'Upload server error, please check your presigned url',
      }),
    );
  });

  it('on success should set a response with status 200 and file location url', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });

    requests[5].respond(200, {
      etag: '7d71fc9df2f745537fb877aad019a988',
      'x-amz-id-2': 'XWnIXBx3TJM8fV4AiFddnBGYmdCWmxarSwzAWDakjzYiPcvppZVsvcRvrXCPXOI6cB9MVxllRgs=',
      'x-amz-request-id': '7BAB893EDBA8CA84',
    }, '');

    expect(props.setResponse.mock.calls[2][0]).toEqual(
      expect.objectContaining({
        status: 200,
        responseText: 'https://lambda-s3-0.s3.us-east-2.amazonaws.com/pic.jpeg',
      }),
    );
  });

  it('on progress should call setProgress with the current upload status', () => {
    const { result } = renderHook(() => useUploadS3WithPresignedUrl(props));
    act(() => {
      result.current();
    });
    
    const progress = new ProgressEvent('mockedProgress', {
      lengthComputable: true,
      loaded: 1,
      total: 10,
    });
    
    requests[6].upload.onprogress(progress);

    expect(props.setProgress.mock.calls[0][0]).toEqual(100);
    expect(props.setProgress.mock.calls[1][0]).toEqual(10);
  });
});

afterAll(() => {
  global.XMLHttpRequest.restore();
});
