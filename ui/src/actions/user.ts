import { push, goBack } from 'connected-react-router';
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
  LOGGED_IN_USER_REQUEST,
  USER_SET_ORCID_PUSH_SETTING_REQUEST,
  USER_SET_ORCID_PUSH_SETTING_SUCCESS,
  USER_SET_ORCID_PUSH_SETTING_ERROR,
  USER_SET_PREFERENCE,
} from './actionTypes';
import { HOME } from '../common/routes';
import { httpErrorToActionPayload } from '../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../user/sessionExpireNotification' was res... Remove this comment to see the full error message
import notifySessionExpired from '../user/sessionExpireNotification';

export function userLoginSuccess(user: any) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
}

export function userSignUpSuccess(user: any) {
  return {
    type: USER_SIGN_UP_SUCCESS,
    payload: user,
  };
}

function userLoginError(error: any) {
  return {
    type: USER_LOGIN_ERROR,
    payload: error,
  };
}

function userSignUpError(error: any) {
  return {
    type: USER_SIGN_UP_ERROR,
    payload: error,
  };
}

function userLogoutSuccess() {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
}

function fetchingLoggedInUser() {
  return {
    type: LOGGED_IN_USER_REQUEST,
  };
}

function userSignUpRequest() {
  return {
    type: USER_SIGN_UP_REQUEST,
  };
}

export function userSignUp(userEmail: any) {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(userSignUpRequest());
    try {
      const response = await http.post('/accounts/signup', userEmail);
      dispatch(userSignUpSuccess(response.data));
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error);
      dispatch(userSignUpError(errorPayload));
    }
  };
}

export function fetchLoggedInUser() {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(fetchingLoggedInUser());
    try {
      const response = await http.get('/accounts/me');
      dispatch(userLoginSuccess(response.data));
    } catch (error) {
      // TODO: differentiate between 401 and other errors
      dispatch(userLogoutSuccess());
    }
  };
}

export function userLocalLogin(credentials: any) {
  return async (dispatch: any, getState: any, http: any) => {
    try {
      const response = await http.post('/accounts/login', credentials);
      dispatch(userLoginSuccess(response.data));
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error);
      dispatch(userLoginError(errorPayload));
    }
  };
}

export function userLogout() {
  return async (dispatch: any, getState: any, http: any) => {
    try {
      await http.get('/accounts/logout');
      dispatch(userLogoutSuccess());

      // Hack to reload current page for logged out user
      dispatch(push(HOME));
      dispatch(goBack());
    } catch (error) {
      // TODO: dispatch logout error?
    }
  };
}

export function userInactive() {
  return async (dispatch: any, getState: any, http: any) => {
    if (getState().user.get('loggedIn')) {
      try {
        await http.get('/accounts/me');
      } catch (error) {
        notifySessionExpired();
        dispatch(userLogoutSuccess());
      }
    }
  };
}

export function setPreference(name: any, value: any) {
  return {
    type: USER_SET_PREFERENCE,
    payload: { name, value },
  };
}

function updatingOrcidPushSetting(value: any) {
  return {
    type: USER_SET_ORCID_PUSH_SETTING_REQUEST,
    payload: { value },
  };
}

function updateOrcidPushSettingSuccess(value: any) {
  return {
    type: USER_SET_ORCID_PUSH_SETTING_SUCCESS,
    payload: { value },
  };
}

function updateOrcidPushSettingError(errorPayload: any) {
  return {
    type: USER_SET_ORCID_PUSH_SETTING_ERROR,
    payload: errorPayload,
  };
}

export function updateOrcidPushSetting(value: any) {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(updatingOrcidPushSetting(value));
    try {
      await http.put('/accounts/settings/orcid-push', { value });
      dispatch(updateOrcidPushSettingSuccess(value));
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error);
      dispatch(updateOrcidPushSettingError(errorPayload));
    }
  };
}
