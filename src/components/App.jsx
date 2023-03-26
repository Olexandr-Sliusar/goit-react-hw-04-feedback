import { GlobalStyle } from './GlobalStyle';
import { Feedback } from './Feedback/Feedback';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <GlobalStyle />
        <Feedback
          stats={{
            good: good,
            neutral: neutral,
            bad: bad,
            total: this.countTotalFeedback(),
            positivePercentage: this.countPositiveFeedbackPercentage(),
          }}
          onClick={this.addFeedback}
        />
      </>
    );
  }
}

// export const App = () => {
//   return (
// <>
//   <GlobalStyle />
//   <Feedback />
//   {/* React homework template */}
// </>
//   );
// };
