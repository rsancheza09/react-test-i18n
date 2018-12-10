import * as ACTIONS from '../constants/clinic';

const initialState = {
  clinicSelected: '',
};

export default function clinic(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CLINIC.SET_VIEW:
      return {
        ...state,
        ...action.payload,
      };

    case ACTIONS.CLINIC.CLEAR:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
