import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import NotificationSystem from './NotificationSystem';

afterEach(cleanup);

describe('Notification System', () => {
  it('notification system should be in the document', () => {
    const fileLocation = '';
    const { container } = render(<NotificationSystem fileLocation={fileLocation}/>);
    const notificationSystem = container.querySelector('.notifications-wrapper');

    expect(notificationSystem).toBeInTheDocument();
  });
  it('notification system should render notification upon non-empty file location string', () => {
    const { rerender, getByText } = render(<NotificationSystem fileLocation="" />);

    const fileLocation = 'some location';
    rerender(<NotificationSystem fileLocation={fileLocation} />);

    const notificationTitle = getByText('File Location');
    const notificationMessage = getByText(fileLocation);

    expect(notificationTitle).toBeInTheDocument();
    expect(notificationMessage).toBeInTheDocument();
  });
});
