import { Actions, ActionTypes, SummaryItemModel } from './actions';
import { SummaryState } from '.';

export function summaryReducer(state: SummaryState.State, action: Actions): SummaryState.State {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const isExist = (state?.summary || []).find((summ: SummaryItemModel) => summ.id === action.payload.id)
      let updatedSummary = [];
      if(isExist) {
        updatedSummary = state.summary.map((summ: SummaryItemModel): SummaryItemModel => {
          if(summ.id === action.payload.id) {
            return { ...summ, quantity: action.payload.quantity };
          }
          return summ;
        });
      }
      else {
        updatedSummary = [...(state?.summary || []), action.payload];
      }
      return {
        ...state,
        summary: updatedSummary,
      };
    }
    case ActionTypes.ADD_WAITLIST_ITEM: {
      const isExist = (state?.waitlist || []).find((wlItem: SummaryItemModel) => wlItem.id === action.payload.id);
      if(isExist) {
        return state;
      }
      else {
       return {
        ...state,
        waitlist: [...(state?.waitlist || []), action.payload],
       }
      }
    }
    case ActionTypes.REMOVE_WAITLIST_ITEM: {
      const updatedWaitlist = (state?.waitlist || []).filter((wlItem: SummaryItemModel) => wlItem.id !== action.payload);
      return {
        ...state,
        waitlist: updatedWaitlist || [],
      };
    }
    default: {
      return state;
    }
  }
}
