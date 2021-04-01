import { Action } from '@ngrx/store';

export interface SummaryItemModel {
  id: string,
  title: string,
  price: number,
  quantity: number,
  isFree?: boolean,
}

export enum ActionTypes {
  ADD_ITEM = '[Summary] Add Item Success',
  ADD_WAITLIST_ITEM = '[Summary] Add Waitlist Item Success',
  REMOVE_WAITLIST_ITEM = '[Summary] Remove Waitlist Item Success',
}

export class AddItemAction implements Action {
  readonly type = ActionTypes.ADD_ITEM;

  constructor(public payload: SummaryItemModel) { }
}

export class AddWaitlistItemAction implements Action {
  readonly type = ActionTypes.ADD_WAITLIST_ITEM;

  constructor(public payload: SummaryItemModel) { }
}

export class RemoveWaitlistItemAction implements Action {
  readonly type = ActionTypes.REMOVE_WAITLIST_ITEM;

  constructor(public payload: string) { }
}

export type Actions = AddItemAction | AddWaitlistItemAction | RemoveWaitlistItemAction;
