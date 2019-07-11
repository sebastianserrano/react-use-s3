import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import UploadFileButton from './UploadFileButton';

afterEach(cleanup);

describe('Upload File Button', () => {
  it('should render disabled when script has not yet been loaded', () => {
    const progress = 'In Progress';
    const scriptStatus = false;
    const file = '';
    const fileName = '';
    const setFileLocation = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        progress={progress}
        scriptStatus={scriptStatus}
        file={file}
        fileName={fileName}
        setFileLocation={setFileLocation}
        setProgress={setProgress}
      />,
    );
    const result = getByText('Upload File');
    expect(result).toBeDisabled();
  });

  it('should render enabled when script has been loaded', () => {
    const progress = 'In Progress';
    const scriptStatus = true;
    const file = '';
    const fileName = '';
    const setFileLocation = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        progress={progress}
        scriptStatus={scriptStatus}
        file={file}
        fileName={fileName}
        setFileLocation={setFileLocation}
        setProgress={setProgress}
      />,
    );
    const result = getByText('Upload File');
    expect(result).toBeEnabled();
  });

  it('should render with text \'Upload File\' before upload', () => {
    const progress = 'In Progress';
    const scriptStatus = false;
    const file = '';
    const fileName = '';
    const setFileLocation = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        progress={progress}
        scriptStatus={scriptStatus}
        file={file}
        fileName={fileName}
        setFileLocation={setFileLocation}
        setProgress={setProgress}
      />,
    );
    const result = getByText('Upload File');
    expect(result).toHaveTextContent('Upload File');
  });

  it('should render with text progress while uploading', () => {
    const progress = '1';
    const scriptStatus = false;
    const file = '';
    const fileName = '';
    const setFileLocation = jest.fn();
    const setProgress = jest.fn();

    const { getByText } = render(
      <UploadFileButton
        progress={progress}
        scriptStatus={scriptStatus}
        file={file}
        fileName={fileName}
        setFileLocation={setFileLocation}
        setProgress={setProgress}
      />,
    );
    const result = getByText(progress);
    expect(result).toHaveTextContent(progress);
  });
});
