import React, { useContext } from 'react';

import './habit-card.css';
import DateBlockContainer from '../date-block-container/date-block-container';
import { convertDateToStr } from '../../utils/date-functions';
import { HabitsContext } from '../../context/habits-context';

const HabitCard: React.FC<{
  id: string;
  title: string;
  ledger: Set<string>;
}> = ({ id, title, ledger }) => {
  const value = useContext(HabitsContext);

  return (
    <div className='habit-card' onDoubleClick={() => value.deleteHabit(id)}>
      <div className='habit-title'>{title}</div>
      <DateBlockContainer
        date={convertDateToStr(new Date())}
        days={10}
        habit={{ id, title, ledger }}
      />
    </div>
  );
};

export default HabitCard;
