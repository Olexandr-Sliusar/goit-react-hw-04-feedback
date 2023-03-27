import { Controls } from './FeedbackOptions.styled';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options, children }) => {
  return (
    <>
      <Controls>
        <button onClick={() => onLeaveFeedback(options[0])} aria-label="Good">
          <CgSmile style={{ color: 'green' }} /> Good
        </button>
        <button
          onClick={() => onLeaveFeedback(options[1])}
          aria-label="Neutral"
        >
          <CgSmileNone style={{ color: '#c1c125' }} /> Neutral
        </button>
        <button onClick={() => onLeaveFeedback(options[2])} aria-label="Bad">
          <CgSmileSad style={{ color: 'red' }} /> Bad
        </button>
      </Controls>
      {children}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
};
