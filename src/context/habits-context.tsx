import React, { createContext, useReducer } from 'react';

import { Habit, Action, HabitsContextType } from '../utils/interfaces';
import {
  addHabit,
  deleteHabit,
  addEntry,
  deleteEntry
} from '../utils/habits-functions';

export const HabitsContext = createContext<HabitsContextType>({
  habits: [],
  addHabit: (title) => {
    return;
  },
  deleteHabit: (id) => {
    return;
  },
  addEntry: (id, date) => {
    return;
  },
  deleteEntry: (id, date) => {
    return;
  }
});

const habitsReducer = (habits: Habit[], action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('addHabit Called', { action });
      return addHabit(habits, action.title);
    case 'DELETE_ITEM':
      console.log('deleteHabit Called', { action });
      return deleteHabit(habits, action.id);
    case 'ADD_ENTRY':
      console.log('addEntry Called', { action });
      return addEntry(habits, action.id, action.date);
    case 'DELETE_ENTRY':
      console.log('deleteEntry Called', { action });
      return deleteEntry(habits, action.id, action.date);
    default:
      return habits;
  }
};

const HabitContextManager: React.FC<{ children?: any }> = (props) => {
  const [ habits, dispatch ] = useReducer(habitsReducer, []);

  const value = {
    habits: habits,
    addHabit: (title: string) =>
      dispatch({
        type: 'ADD_ITEM',
        title: title
      }),
    deleteHabit: (id: string) =>
      dispatch({
        type: 'DELETE_ITEM',
        id: id
      }),
    addEntry: (id: string, date: string) => {
      return dispatch({
        type: 'ADD_ENTRY',
        id: id,
        date: date
      });
    },
    deleteEntry: (id: string, date: string) => {
      return dispatch({
        type: 'DELETE_ENTRY',
        id: id,
        date: date
      });
    }
  };

  return (
    <HabitsContext.Provider value={value}>
      {props.children}
    </HabitsContext.Provider>
  );
};

export default HabitContextManager;
