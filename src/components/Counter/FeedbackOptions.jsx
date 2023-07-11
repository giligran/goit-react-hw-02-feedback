import PropTypes from 'prop-types'; // ES6

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      <li>
        <button onClick={onLeaveFeedback}>Good</button>
      </li>
      <li>
        <button onClick={onLeaveFeedback}>Neutral</button>
      </li>
      <li>
        <button onClick={onLeaveFeedback}>Bad</button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
