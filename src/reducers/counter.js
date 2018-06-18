import * as ACTIONS from '../constants/counter';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

function counter (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.COUNTER.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case ACTIONS.COUNTER.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      };

    case ACTIONS.COUNTER.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case ACTIONS.COUNTER.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing,
      };

    default:
      return state;
  }
}
export default counter;
