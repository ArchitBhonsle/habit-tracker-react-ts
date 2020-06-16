import React, { useContext } from 'react';

import { HabitsContext } from '../../context/habits-context';
import HabitCard from '../habit-card/habit-card';

import './habits-container.css';
import { convertDateToStr, getNDaysArray } from '../../utils/date-functions';

const HabitsContainer: React.FC<{}> = () => {
  const value = useContext(HabitsContext);
  const nDaysArray = getNDaysArray(convertDateToStr(new Date()), 10);
  nDaysArray.reverse();

  return (
    <div className='habits-container'>
      <div className='container-title'>
        {nDaysArray.map((date) => (
          <div className='date-hint' key={date}>
            {`${new Date(date).getDate()}/${new Date(date).getMonth()}`}
          </div>
        ))}
      </div>
      <div>
        {value.habits.map((habit) => <HabitCard key={habit.id} {...habit} />)}
      </div>
    </div>
  );
};

export default HabitsContainer;
