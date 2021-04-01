import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { SummaryState } from '.';
import { SummaryItemModel } from './actions';

const getSummary = (state: SummaryState.State): SummaryItemModel[] => state ? state.summary : null;
const getWaitlist = (state: SummaryState.State): SummaryItemModel[] => state ? state.waitlist : null;
const getSummaryById = (state: SummaryState.State, props: any) => {
    if (!state || state && !state.summary) {
        return null;
    }

    return state.summary.find(s => s.id === props.id);
}
const getWaitlistById = (state: SummaryState.State, props: any) => {
    if (!state || state && !state.waitlist) {
        return null;
    }

    return state.waitlist.find(s => s.id === props.id);
}

export const selectUserState: MemoizedSelector<
    object,
    SummaryState.State
> = createFeatureSelector<SummaryState.State>('summary');

export const selectSummary = createSelector(selectUserState, getSummary);
export const selectWaitlist = createSelector(selectUserState, getWaitlist);
export const selectSummaryById = createSelector(selectUserState, getSummaryById);
export const selectWaitlistById = createSelector(selectUserState, getWaitlistById);
