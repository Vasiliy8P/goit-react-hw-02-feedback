import { Component } from "react";
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  leaveFeedback = (evt) => { 
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,  
    }))
  }

  countTotalFeedback = () => { 
    const feedbacks = Object.values(this.state)
    const totalFeedback = feedbacks.reduce((acc, feedback) => (acc + feedback), 0)
    return totalFeedback
  }
  
  countPositiveFeedbackPercentage = () => { 
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = Math.round(this.state.good * 100 / totalFeedback);
    return positiveFeedback;    
  }    

  render() {  
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.leaveFeedback} />
          
          {this.countTotalFeedback() === 0
            ? <Notification
              message="There is no feedback" />
            : <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage} />
          }
        </Section>
      </div>
    )
  }
}

export default App;
