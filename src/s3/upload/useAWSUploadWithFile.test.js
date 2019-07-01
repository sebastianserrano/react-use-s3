import './__mocks__/S3.js';
import { renderHook, act } from '@testing-library/react-hooks'
import useAWSUploadWithFile from './useAWSUploadWithFile';

const props = {
  file: "",
  setFileLocation: jest.fn(),
  setResult: jest.fn()
}

const event = {
  loaded: 0.1,
  total: 10
}

describe('Use AWS Upload With File Hook', () => {
  it('should call setProgress useEffect function', () => {
    const { result } = renderHook(() => useAWSUploadWithFile(props))
    act(() => {
      result.current();
    })
    window.s3.upload().emit('httpUploadProgress', event)
    expect(props.setResult.mock.calls.length).toBe(1)
    expect(props.setFileLocation.mock.calls.length).toBe(1)
  
  })
})

