import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadFileButton from './UploadFileButton';

afterEach(cleanup);

describe('Upload File Button', () => {
  it('should render disabled when presigned url input is empty', () => {
    const url = '';
    const progress = 'In Progress';
    const file = {};
    const setResponse = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        url={url}
        progress={progress}
        file={file}
        setResponse={setResponse}
        setProgress={setProgress}
      />,
    );
    const result = getByText('Upload File');
    expect(result).toBeDisabled();
  });

  it('should render enabled when presigned url input is not empty', () => {
    const url = 'mockedPresignedUrl';
    const progress = 'In Progress';
    const file = {};
    const setResponse = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        url={url}
        progress={progress}
        file={file}
        setResponse={setResponse}
        setProgress={setProgress}
      />,
    );
    const result = getByText('Upload File');
    expect(result).toBeEnabled();
  });

  it('should render with text \'Upload File\' before upload', () => {
    const url = 'mockedPresignedUrl';
    const progress = 'In Progress';
    const file = {};
    const setResponse = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        url={url}
        progress={progress}
        file={file}
        setResponse={setResponse}
        setProgress={setProgress}
      />,
    );
    const result = getByText('Upload File');
    expect(result).toHaveTextContent('Upload File');
  });

  it('should render with text progress while uploading', () => {
    const url = 'mockedPresignedUrl';
    const progress = '1';
    const file = {};
    const setResponse = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        url={url}
        progress={progress}
        file={file}
        setResponse={setResponse}
        setProgress={setProgress}
      />,
    );
    const result = getByText(progress);
    expect(result).toHaveTextContent(progress);
  });
});
