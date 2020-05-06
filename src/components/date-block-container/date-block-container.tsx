import React from 'react';

import { Habit } from '../../utils/interfaces';
import { getNDaysArray, getNDaysToBoolean } from '../../utils/date-functions';
import DateBlock from '../date-block/date-block';

import './date-block-container.css';

const DateBlockContainer: React.FC<{
  habit: Habit;
  days: number;
  date: string;
}> = ({ habit: { id, ledger }, days, date }) => {
  const nDaysArray = getNDaysArray(date, days);
  const nDaysBoolean = getNDaysToBoolean(nDaysArray, ledger);

  return (
    <div className='date-block-container'>
      {nDaysBoolean.map((status, idx) => (
        <DateBlock key={idx} id={id} date={nDaysArray[idx]} status={status} />
      ))}
    </div>
  );
};

export default DateBlockContainer;
