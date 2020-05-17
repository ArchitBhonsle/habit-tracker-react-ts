import React, { createContext, useReducer, useEffect } from 'react';

import { Habit, Action, HabitsContextType } from '../utils/interfaces';
import {
  addHabit,
  deleteHabit,
  addEntry,
  deleteEntry,
  convertLedgerArrayToSet,
  convertLedgerSetToArray
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
    case 'LOAD_HABITS':
      console.log('habits loaded', { action });
      return action.habits ? action.habits : [];
    default:
      return habits;
  }
};

const HabitContextManager: React.FC<{ children?: any }> = (props) => {
  const [ habits, dispatch ] = useReducer(habitsReducer, []);

  useEffect(() => {
    const storedHabits = localStorage.getItem('stored-habits');
    if (storedHabits) {
      const parsedStoredHabits = JSON.parse(storedHabits);
      dispatch({
        type: 'LOAD_HABITS',
        habits: convertLedgerArrayToSet(parsedStoredHabits.habits)
      });
    }
  }, []);

  useEffect(
    () => {
      const storedHabits = JSON.stringify({
        habits: convertLedgerSetToArray(habits)
      });
      localStorage.setItem('stored-habits', storedHabits);
    },
    [ habits ]
  );

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
