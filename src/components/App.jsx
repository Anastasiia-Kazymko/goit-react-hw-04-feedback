import React from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <div>
          <h1>Please Leave feedback</h1>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onBtnClick={this.onBtnClick}
          />
        </div>
        <div>
          <h2>Statistics</h2>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </div>
      </>
    );
  }
}
