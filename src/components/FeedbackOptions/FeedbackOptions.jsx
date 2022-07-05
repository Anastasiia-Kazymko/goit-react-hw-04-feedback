import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Buttons,
} from 'components/FeedbackOptions/FeedbackOptions.styled';
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
    <Buttons>
      {options.map(key => {
        const Icon = icons[key];
        return (
          <Button key={key} type="button" onClick={() => onBtnClick(key)}>
            <Icon /> {key}
          </Button>
        );
      })}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  ratingIncrement: PropTypes.func,
};
