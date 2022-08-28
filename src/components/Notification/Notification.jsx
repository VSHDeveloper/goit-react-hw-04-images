import PropTypes from 'prop-types';
import { Wrapper } from './Notification.styled';

const Notification = ({ eventColor = 'black', children }) => {
  return <Wrapper eventColor={eventColor}>{children}</Wrapper>;
};

export default Notification;

Notification.propTypes = {
  eventColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
