import { Container, Controls } from './Feedback.styled';
import { StatisticsData } from '../Statistics/Statistics';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';

export const Feedback = ({ stats, onClick }) => {
  // console.dir(stats);
  // console.log(stats);
  // console.log(stats.stats.good);
  // stats.good = 1;
  // stats.bad = 1;
  return (
    <Container>
      <h2>Please leave feedback</h2>
      <Controls>
        <button onClick={() => onClick('good')} aria-label="Good">
          <CgSmile style={{ color: 'green' }} /> Good
        </button>
        <button onClick={() => onClick('neutral')} aria-label="Neutral">
          <CgSmileNone style={{ color: '#c1c125' }} /> Neutral
        </button>
        <button onClick={() => onClick('bad')} aria-label="Bad">
          <CgSmileSad style={{ color: 'red' }} /> Bad
        </button>
      </Controls>
      <StatisticsData stats={stats} />
      {/* {Boolean(stats.good || stats.neutral || stats.bad) && (
        <StatisticsData stats={stats} />
      )} */}
    </Container>
  );
};
