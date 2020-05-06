import React from 'react';

import './habit-card.css';
import DateBlockContainer from '../date-block-container/date-block-container';
import { convertDateToStr } from '../../utils/date-functions';

const HabitCard: React.FC<{
  id: string;
  title: string;
  ledger: Set<string>;
}> = ({ id, title, ledger }) => {
  return (
    <div className='habit-card'>
      <h2>{title}</h2>
      <p>{id}</p>
      <pre>{String(Array.from(ledger))}</pre>
      <DateBlockContainer
        date={convertDateToStr(new Date())}
        days={10}
        habit={{ id, title, ledger }}
      />
    </div>
  );
};

export default HabitCard;
