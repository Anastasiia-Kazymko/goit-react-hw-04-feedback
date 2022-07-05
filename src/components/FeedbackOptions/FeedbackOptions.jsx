import React from 'react';
import PropTypes from 'prop-types';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';

const icons = {
  good: BsFillEmojiSmileFill,
  neutral: BsFillEmojiNeutralFill,
  bad: BsFillEmojiFrownFill,
};

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div>
      {options.map(key => {
        const Icon = icons[key];
        return (
          <button key={key} type="button" onClick={() => onBtnClick(key)}>
            <Icon /> {key}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  ratingIncrement: PropTypes.func,
};
