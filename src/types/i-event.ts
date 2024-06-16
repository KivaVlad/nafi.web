export interface IEvent {
  id?: number;
  title: string;
  start_date: string;
  pdf?: object;
  current_slide?: number;
  user?: string;
}