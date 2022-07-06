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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          fontSize: 40,
          color: '#010101',
        }}
        npm
      >
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
      </div>
    );
  }
}
