import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import './main.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];
  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
