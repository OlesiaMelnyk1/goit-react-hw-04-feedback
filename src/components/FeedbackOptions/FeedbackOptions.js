import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FeedbackButton, FeedbackOptionsList } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsList>
      {options.map(option => {
        return (
          <li key={shortid.generate()}>
            <FeedbackButton
              name={option}
              key={shortid.generate()}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </li>
        );
      })}
    </FeedbackOptionsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
