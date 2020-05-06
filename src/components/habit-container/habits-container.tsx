import React, { useContext, useEffect } from 'react';

import { HabitsContext } from '../../context/habits-context';
import HabitCard from '../habit-card/habit-card';

import './habits-container.css';

const HabitsContainer: React.FC<{}> = () => {
  const value = useContext(HabitsContext);
  useEffect(
    () => {
      console.log(value.habits);
    },
    [ value.habits ]
  );
  return (
    <div className='habits-container'>
      {value.habits.map((habit) => <HabitCard key={habit.id} {...habit} />)}
    </div>
  );
};

export default HabitsContainer;
