import { GlobalStyle } from '../GlobalStyle';
import { Component } from 'react';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //викликаємо публічну фу-цію і отримуєму type відгуку

  updateFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  // countTotalFeedback;

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.updateFeedback('good')}>Good</button>
        <button onClick={() => this.updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.updateFeedback('bad')}>Bad</button>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
        <GlobalStyle />
      </Container>
    );
  }
}
