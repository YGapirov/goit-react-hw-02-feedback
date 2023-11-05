import { GlobalStyle } from '../GlobalStyle';
import { Component } from 'react';
import { Container } from './App.styled';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/Feedbackoptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //викликаємо публічну фу-цію

  updateFeedback = e => {
    const targetValue = e.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [targetValue]: prevState[targetValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.updateFeedback}
            options={['Good', 'Neutral', 'Bad']}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </Container>
    );
  }
}
