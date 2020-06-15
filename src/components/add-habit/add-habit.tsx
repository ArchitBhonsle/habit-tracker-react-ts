import React, { useState, useContext } from 'react';
import { HabitsContext } from '../../context/habits-context';

import './add-habit.css';

const AddHabit: React.FC<{}> = () => {
  const value = useContext(HabitsContext);
  const [ title, setTitle ] = useState<string>('');

  return (
    <div className='add-habit-container'>
      <form
        className='add-habit'
        onSubmit={(e) => {
          e.preventDefault();
          setTitle('');
        }}
      >
        <input
          type='text'
          placeholder='Add New Habit'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => value.addHabit(title)}>&#10140;</button>
      </form>
      <hr className='division' />
    </div>
  );
};

export default AddHabit;
