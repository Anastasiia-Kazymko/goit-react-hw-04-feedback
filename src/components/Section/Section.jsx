import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Section = ({
  title,
  options,
  onBtnClick,
  good,
  neutral,
  bad,
  total,
  positive,
}) => {
  return (
    <>
      <section>
        <h1>{title}</h1>
        <FeedbackOptions options={options} onBtnClick={onBtnClick} />

        {total > 0 ? (
          <Statistics
            title={'Statistics'}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onBtnClick: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
