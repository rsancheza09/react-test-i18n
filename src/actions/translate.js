import { setLocale } from 'react-redux-i18n';

export const changeLocale = (locale) => (dispatch, getState) => {
  return dispatch(setLocale(locale, true));
};
