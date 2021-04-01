import { SummaryItemModel } from './actions';

export interface State {
  summary: SummaryItemModel[];
  waitlist: SummaryItemModel[];
}

export const initialState: State = {
  summary: [],
  waitlist: [],
};
