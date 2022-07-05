import React from 'react';
import { Section } from 'components/Section/Section';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //options = Object.keys(this.state);

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
      <div>
        <Section
          title={'Please Leave feedback'}
          options={Object.keys(this.state)}
          onBtnClick={this.onBtnClick}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()}
        />
        {/* <h1>Please leave feedback</h1>
        <div>
          {this.options.map(key => {
            const Icon = icons[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => this.ratingIncrement(key)}
              >
                <Icon /> {key}
              </button>
            );
          })}
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div> */}
      </div>
    );
  }
}
