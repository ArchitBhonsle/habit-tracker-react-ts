import { v4 } from 'uuid';

import { Habit } from './interfaces';

export function addHabit(habits: Habit[], title: string | undefined): Habit[] {
  if (title === undefined) return habits;
  const newHabit: Habit = {
    id: v4(),
    title: title,
    ledger: new Set()
  };
  return [ ...habits, newHabit ];
}

export function deleteHabit(habits: Habit[], id: string | undefined): Habit[] {
  if (id === undefined) return habits;
  return habits.filter((habit) => (habit.id === id ? false : true));
}

export function addEntry(
  habits: Habit[],
  id: string | undefined,
  date: string | undefined
): Habit[] {
  if (id === undefined || date === undefined) return habits;
  return habits.map(
    (habit) =>
      habit.id === id ? { ...habit, ledger: habit.ledger.add(date) } : habit
  );
}

export function deleteEntry(
  habits: Habit[],
  id: string | undefined,
  date: string | undefined
): Habit[] {
  if (id === undefined || date === undefined) return habits;
  return habits.map((habit) => {
    if (habit.id === id) habit.ledger.delete(date);
    return habit;
  });
}
