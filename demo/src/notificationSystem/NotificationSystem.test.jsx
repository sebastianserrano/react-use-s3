import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotificationSystem from './NotificationSystem';

afterEach(cleanup);

describe('Notification System', () => {
  it('notification system should render a level \'info\' notification upon successful upload', () => {
    const response = {
      status: 200,
      responseText: 'https://lambda-s3-0.s3.us-east-2.amazonaws.com/pic.jpeg',
    };
    const { rerender, container } = render(<NotificationSystem response={response} />);

    rerender(<NotificationSystem response={response} />);

    const notificationTitle = container.querySelector('.notification-title');
    const notificationMessage = container.querySelector('.notification-message');

    expect(notificationTitle).toHaveTextContent('File location');
    expect(notificationMessage).toHaveTextContent(response.responseText);
  });

  it('notification system should render a level \'error\' notification bad request upload', () => {
    const response = {
      status: 403,
      responseText: 'Upload server error, please check your presigned url',
    };
    const { rerender, container } = render(<NotificationSystem response={response} />);

    rerender(<NotificationSystem response={response} />);

    const notificationTitle = container.querySelector('.notification-title');
    const notificationMessage = container.querySelector('.notification-message');

    expect(notificationTitle).toHaveTextContent('Something went wrong');
    expect(notificationMessage).toHaveTextContent(response.responseText);
  });
});
