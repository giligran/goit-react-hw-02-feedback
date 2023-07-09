import PropTypes from 'prop-types'; // ES6

function Notification({ message }) {
    return <p>{message}</p>;
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
