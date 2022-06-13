import { push } from 'connected-react-router';
import { List } from 'immutable';

import {
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  INITIAL_FORM_DATA_REQUEST,
  INITIAL_FORM_DATA_ERROR,
  INITIAL_FORM_DATA_SUCCESS,
  SUBMIT_REQUEST,
} from './actionTypes';
import { SUBMISSIONS } from '../common/routes';
import { httpErrorToActionPayload } from '../common/utils';

export const REDIRECT_TO_EDITOR = List(['experiments', 'institutions']);

function submitSuccess(payload: any) {
  return {
    type: SUBMIT_SUCCESS,
    payload,
  };
}

function submitRequest() {
  return {
    type: SUBMIT_REQUEST,
  };
}

function submitError(error: any) {
  return {
    type: SUBMIT_ERROR,
    payload: error,
  };
}

function fetchingInitialFormData(payload: any) {
  return {
    type: INITIAL_FORM_DATA_REQUEST,
    payload, // only used for testing
  };
}

function fetchInitialFormDataError(error: any) {
  return {
    type: INITIAL_FORM_DATA_ERROR,
    payload: error,
  };
}

function fetchInitialFormDataSuccess(data: any) {
  return {
    type: INITIAL_FORM_DATA_SUCCESS,
    payload: data,
  };
}

export function submit(pidType: any, data: any) {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(submitRequest());
    try {
      const response = await http.post(`${SUBMISSIONS}/${pidType}`, { data });
      dispatch(submitSuccess(response.data));
      if (REDIRECT_TO_EDITOR.includes(pidType)) {
        window.open(`/editor/record/${pidType}/${response.data.control_number}`, '_self');
      } else {
        dispatch(push(`/submissions/${pidType}/new/success`));
      }
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error)
      dispatch(submitError(errorPayload));
    }
  };
}

export function submitUpdate(pidType: any, pidValue: any, data: any) {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(submitRequest());
    try {
      const response = await http.put(`${SUBMISSIONS}/${pidType}/${pidValue}`, {
        data,
      });
      dispatch(submitSuccess(response.data));
      dispatch(push(`/submissions/${pidType}/${pidValue}/success`));
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error)
      dispatch(submitError(errorPayload));
    }
  };
}

export function fetchUpdateFormData(pidType: any, pidValue: any) {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(fetchingInitialFormData({ pidValue, pidType }));
    try {
      const response = await http.get(`${SUBMISSIONS}/${pidType}/${pidValue}`);
      dispatch(fetchInitialFormDataSuccess(response.data));
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error)
      dispatch(fetchInitialFormDataError(errorPayload));
    }
  };
}

export function importExternalLiterature(id: any) {
  return async (dispatch: any, getState: any, http: any) => {
    dispatch(fetchingInitialFormData({ id }));
    try {
      const response = await http.get(`/literature/import/${id}`);
      dispatch(fetchInitialFormDataSuccess(response.data));
    } catch (error) {
      const errorPayload = httpErrorToActionPayload(error)
      dispatch(fetchInitialFormDataError(errorPayload));
    }
  };
}
