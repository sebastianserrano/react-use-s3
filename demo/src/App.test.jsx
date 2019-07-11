import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

describe('React Use S3 Demo', () => {
  it('notification system should be in the document', () => {
    const { container } = render(<App />);
    const notificationSystem = container.querySelector('.notifications-wrapper');

    expect(notificationSystem).toBeInTheDocument();
  });

  it('should render "React S3" as title', () => {
    const { getByText } = render(<App />);
    const title = getByText('React S3');

    expect(title).toBeInTheDocument();
  });

  it('should render file picker', () => {
    const { getByTestId } = render(<App />);
    const title = getByTestId('file-picker');

    expect(title).toBeInTheDocument();
  });

  it('should render upload file button', () => {
    const { getByText } = render(<App />);
    const title = getByText('Upload File');

    expect(title).toBeInTheDocument();
  });
});
