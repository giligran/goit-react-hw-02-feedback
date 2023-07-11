import PropTypes from 'prop-types'; // ES6

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
