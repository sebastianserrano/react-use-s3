import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import FilePicker from './FilePicker';

afterEach(cleanup);

describe('React Use S3 Demo', () => {
  it('should render file picker', () => {
    const mockedFileName = '';
    const mockedSetFile = jest.fn();
    const mockedSetFileName = jest.fn();

    const { getByTestId } = render(
      <FilePicker
        fileName={mockedFileName}
        setFile={mockedSetFile}
        setFileName={mockedSetFileName}
      />,
    );

    const filePicker = getByTestId('file-picker-input');

    act(() => {
      fireEvent.drop(filePicker, {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      });
    });

    //expect(mockedSetFileName).toHaveBeenCalled();
    //expect(mockedSetFile).toHaveBeenCalled();
  });
});
