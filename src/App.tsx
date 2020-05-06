import React from 'react';

import HabitContextManager from './context/habits-context';
import Playground from './components/playground/playground';
import HabitsContainer from './components/habit-container/habits-container';

import './App.css';

const App: React.FC<{}> = () => (
  <HabitContextManager>
    <div className='main-container'>
      <Playground />
      <HabitsContainer />
    </div>
  </HabitContextManager>
);

export default App;
