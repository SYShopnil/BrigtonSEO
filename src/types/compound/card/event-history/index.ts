import { IEventDate } from '../../common';

export interface IEventHistoryCard extends IEventDate {
  eventNumber: number;
  topic: string;
  location: string;
}
