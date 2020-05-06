import React, { useContext } from 'react';

import { HabitsContext } from '../../context/habits-context';
import { Habit } from '../../utils/interfaces';

import './date-block.css';

const DateBlock: React.FC<{ id: string; date: string; status: boolean }> = ({
  id,
  date,
  status
}) => {
  const value = useContext(HabitsContext);

  const toggleEntry = (id: string, date: string) => {
    const habit: Habit | undefined = value.habits.find(
      (habit) => habit.id === id
    );
    console.log(habit);
    if (habit === undefined) return alert("Habit id doesn't exist");
    return habit.ledger.has(date)
      ? value.deleteEntry(id, date)
      : value.addEntry(id, date);
  };

  return (
    <div
      className={`date-block ${status ? 'green' : 'red'}`}
      onClick={() => toggleEntry(id, date)}
    />
  );
};

export default DateBlock;
