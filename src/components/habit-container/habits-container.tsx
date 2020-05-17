import React, { useContext } from 'react';

import { HabitsContext } from '../../context/habits-context';
import HabitCard from '../habit-card/habit-card';

import './habits-container.css';
import useWindowDimensions from '../hooks/useWindowSize';
import { convertDateToStr, getNDaysArray } from '../../utils/date-functions';

const HabitsContainer: React.FC<{}> = () => {
  const value = useContext(HabitsContext);
  const { width } = useWindowDimensions();
  const blocks = width < 700 ? 5 : 10;
  const nDaysArray = getNDaysArray(convertDateToStr(new Date()), blocks);
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
      {value.habits.map((habit) => <HabitCard key={habit.id} {...habit} />)}
    </div>
  );
};

export default HabitsContainer;
