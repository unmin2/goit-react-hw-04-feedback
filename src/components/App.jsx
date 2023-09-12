import React, { useState } from 'react';
import FeedbackOptions from './ feedback-widget/widget';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (currentBtnValue) => {
    setFeedback((prevState) => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const valuesArr = Object.values(feedback);
    return valuesArr.reduce((acc, val) => acc + val, 0);
  };

  const countZero = () => {
    return feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((feedback.good / countTotalFeedback()) * 100);
  };

  const btnNames = Object.keys(feedback);

  return (
    <div className="App">
      <section>
        <FeedbackOptions options={btnNames} onLeaveFeedback={onLeaveFeedback} />
        {countZero() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            stat={feedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    </div>
  );
}

export default App;
