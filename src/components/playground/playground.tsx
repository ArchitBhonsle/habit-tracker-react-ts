import React, { useState, useContext } from 'react';

import { HabitsContext } from '../../context/habits-context';
import { Habit } from '../../utils/interfaces';

const Playground: React.FC<{}> = () => {
  const value = useContext(HabitsContext);

  const toggleEntry = (id: string, date: string) => {
    const habit: Habit | undefined = value.habits.find(
      (habit) => habit.id === id
    );
    if (habit === undefined) return alert("Habit id doesn't exist");
    return habit.ledger.has(date)
      ? value.deleteEntry(id, date)
      : value.addEntry(id, date);
  };

  const [ { id, title, date }, setForm ] = useState({
    id: '',
    title: '',
    date: ''
  });

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='title'
            value={title}
            onChange={(e) => setForm({ id, title: e.target.value, date })}
          />
          <button onClick={() => value.addHabit(title)}>Add Habit</button>
        </form>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='id'
            value={id}
            onChange={(e) => setForm({ id: e.target.value, title, date })}
          />
          <button onClick={() => value.deleteHabit(id)}>Delete Habit</button>
        </form>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='date'
            value={date}
            onChange={(e) => setForm({ id, title, date: e.target.value })}
          />
          <button onClick={() => toggleEntry(id, date)}>Add Entry</button>
        </form>
      </div>
    </div>
  );
};

export default Playground;
