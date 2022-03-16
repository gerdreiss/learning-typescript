export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN,
  IN_PROGRESS,
  DONE,
}
