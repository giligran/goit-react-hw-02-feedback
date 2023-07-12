import PropTypes from 'prop-types'; // ES6
import { ListOptions, OptionsButton } from './Counter.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ListOptions>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionsButton
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </OptionsButton>
          </li>
        );
      })}
    </ListOptions>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
