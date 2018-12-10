import * as ACTIONS from '../constants/clinic';

export const viewClinicDetails = (clinicSelected) => (dispatch) => dispatch({
  type: ACTIONS.CLINIC.SET_VIEW,
  payload: {
    clinicSelected,
  },
});
