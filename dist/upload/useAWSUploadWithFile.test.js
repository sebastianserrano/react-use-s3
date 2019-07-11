require('./__mocks__/S3');
const { renderHook, act } = require('@testing-library/react-hooks');
const useAWSUploadWithFile = require('./useAWSUploadWithFile');

const props = {
  file: '',
  setFileLocation: jest.fn(),
  setProgress: jest.fn(),
};

const event = {
  loaded: 0.1,
  total: 10,
};

describe('Use AWS Upload With File Hook', () => {
  it('should call setProgress and setFileLocation useEffect hooks', () => {
    const { result } = renderHook(() => useAWSUploadWithFile(props));
    act(() => {
      result.current();
    });
    window.s3.upload().emit('httpUploadProgress', event);
    expect(props.setProgress.mock.calls.length).toBe(1);
    expect(props.setFileLocation.mock.calls.length).toBe(1);
  });
});
