import { Notification } from '../Notification/Notification';
import { Statistics } from './Statistics.styled';

export const StatisticsData = ({ stats }) => {
  return (
    <Statistics>
      <h2>Statistics</h2>
      {stats.good || stats.neutral || stats.bad ? (
        <>
          <p>Good: {stats.good}</p>
          <p>Neutral: {stats.neutral}</p>
          <p>Bad: {stats.bad}</p>
          <p>Total: {stats.total}</p>
          <p>Positive feedback: {stats.positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Statistics>
  );
};
