export interface Habit {
  id: string;
  title: string;
  ledger: Set<string>;
}

export interface HabitsContextType {
  habits: Habit[];
  addHabit: ((title: string) => void);
  deleteHabit: ((id: string) => void);
  addEntry: ((id: string, date: string) => void);
  deleteEntry: ((id: string, date: string) => void);
}

export interface Action {
  type: string;
  id?: string;
  title?: string;
  ledger?: string;
  date?: string;
  habits?: Habit[];
}
