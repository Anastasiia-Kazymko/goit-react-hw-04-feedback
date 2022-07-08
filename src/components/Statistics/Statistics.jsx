import PropTypes from 'prop-types';
import { Rating } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <Rating>Good:{good}</Rating>
      <Rating>Neutral:{neutral}</Rating>
      <Rating>Bad:{bad}</Rating>
      <Rating>Total:{total}</Rating>
      <Rating>Positive Feedback:{positive}%</Rating>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
