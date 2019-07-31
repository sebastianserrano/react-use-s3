import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import PresignedUrlInput from './PresignedUrlInput';

afterEach(cleanup);

describe('Presigned url input', () => {
  it('should display presigned url upon user input change', () => {
    const mockedSetPresignedUrl = jest.fn();
    const mockedPresignedUrl = 'mockedPresignedUrl';
    const { getByPlaceholderText } = render(<PresignedUrlInput setPresignedUrl={mockedSetPresignedUrl} />);

    const presignedUrlInput = getByPlaceholderText('Presigned Url');

    fireEvent.change(presignedUrlInput, { target: { value: mockedPresignedUrl } });

    expect(presignedUrlInput.value).toEqual(mockedPresignedUrl);
  });

  it('should fire setPresignedUrl upon user input change', () => {
    const mockedSetPresignedUrl = jest.fn();
    const mockedPresignedUrl = 'mockedPresignedUrl';
    const { getByPlaceholderText } = render(<PresignedUrlInput setPresignedUrl={mockedSetPresignedUrl} />);

    const presignedUrlInput = getByPlaceholderText('Presigned Url');

    fireEvent.change(presignedUrlInput, { target: { value: mockedPresignedUrl } });

    expect(mockedSetPresignedUrl).toHaveBeenCalled();
  });
});
