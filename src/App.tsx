import React from 'react';

import HabitContextManager from './context/habits-context';
import HabitsContainer from './components/habit-container/habits-container';

import './App.css';
import AddHabit from './components/add-habit/add-habit';

const App: React.FC<{}> = () => (
  <HabitContextManager>
    <header className='header'>
      <span className='header-text'>&#8634; Repeat</span>
    </header>
    <div className='main-container'>
      <AddHabit />
      <HabitsContainer />
    </div>
  </HabitContextManager>
);

export default App;
