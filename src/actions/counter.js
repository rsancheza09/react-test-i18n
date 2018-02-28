import * as ACTIONS from '../constants/counter';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTER.INCREMENT_REQUESTED,
    });

    dispatch({
      type: ACTIONS.COUNTER.INCREMENT,
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTER.INCREMENT_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: ACTIONS.COUNTER.INCREMENT,
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTER.DECREMENT_REQUESTED,
    });

    dispatch({
      type: ACTIONS.COUNTER.DECREMENT,
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTER.DECREMENT_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: ACTIONS.COUNTER.DECREMENT,
      });
    }, 3000);
  };
};
