import React from 'react';
import PropTypes from 'prop-types';
import ReactNotificationSystem from 'react-notification-system';

class NotificationSystem extends React.Component {
  constructor() {
    super();
    this.notificationSystem = React.createRef();
  }

  componentDidUpdate() {
    const { fileLocation } = this.props;
    const notification = this.notificationSystem.current;

    if (fileLocation !== '') {
      notification.addNotification({
        title: 'File Location',
        message: fileLocation,
        level: 'info',
        position: 'tc',
      });
    }
  }

  render() {
    return (
      <ReactNotificationSystem ref={this.notificationSystem} />
    );
  }
}

NotificationSystem.propTypes = {
  fileLocation: PropTypes.string.isRequired,
};

export default NotificationSystem;
