import PropTypes from 'prop-types';

export const Statistics = ({ title, good, neutral, bad, total, positive }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive Feedback:{positive}%</p>
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
