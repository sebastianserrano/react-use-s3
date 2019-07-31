import React from 'react';
import PropTypes from 'prop-types';
import ReactNotificationSystem from 'react-notification-system';

class NotificationSystem extends React.Component {
  constructor() {
    super();
    this.notificationSystem = React.createRef();
  }

  componentDidUpdate() {
    const { response } = this.props;
    const { status, responseText } = response;

    const notificationSystem = this.notificationSystem.current;

    if (status === 200) {
      notificationSystem.addNotification({
        title: 'File location',
        message: responseText,
        level: 'info',
        position: 'tc',
      });
    } else if (status !== 0) {
      notificationSystem.addNotification({
        title: 'Something went wrong',
        message: responseText,
        level: 'error',
        position: 'tc',
      });
    }
  }

  render() {
    return (
      <ReactNotificationSystem data-testid="notification-system" ref={this.notificationSystem} />
    );
  }
}

NotificationSystem.propTypes = {
  response: PropTypes.object.isRequired,
};

export default NotificationSystem;
