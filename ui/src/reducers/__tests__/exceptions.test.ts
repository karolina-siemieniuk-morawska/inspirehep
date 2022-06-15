import { Map, fromJS } from 'immutable';

import reducer from '../exceptions';
import * as types from '../../actions/actionTypes';


describe('exceptions reducer', () => {
  
  it('default', () => {
    const state = reducer(undefined, {});
    const expected = fromJS({
      loading: false,
      data: [],
      error: {},
    });
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
    expect(state).toEqual(expected);
  });

  
  it('EXCEPTIONS_REQUEST', () => {
    const state = reducer(Map(), { type: types.EXCEPTIONS_REQUEST });
    const expected = Map({ loading: true });
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
    expect(state).toEqual(expected);
  });

  
  it('EXCEPTIONS_SUCCESS', () => {
    const payload = {
      data: [
        {
          collection: 'hep',
          error: 'Some Error',
          recid: 123456,
        },
      ],
    };
    const state = reducer(Map(), { type: types.EXCEPTIONS_SUCCESS, payload });
    const expected = fromJS({
      loading: false,
      data: payload.data,
      error: {},
    });
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
    expect(state.sort()).toEqual(expected.sort());
  });

  
  it('EXCEPTIONS_ERROR', () => {
    const state = reducer(Map(), {
      type: types.EXCEPTIONS_ERROR,
      payload: {
        error: { message: 'error' }
      },
    });
    const expected = fromJS({
      loading: false,
      data: [],
      error: { message: 'error' },
    });
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
    expect(state).toEqual(expected);
  });
});
