import middleware from '../logoutUserOn401';
import { userLogout } from '../../actions/user';


jest.mock('../../actions/user');


describe('LogoutUser middleware', () => {
  let mirrorNext;
  let dispatch: any;
  let mockDispatch;

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    
    mirrorNext = jest.fn((value: any) => value);
    
    mockDispatch = jest.fn();
    dispatch = middleware({ dispatch: mockDispatch })(mirrorNext);
  });

 
  afterEach(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'mockClear' does not exist on type '() =>... Remove this comment to see the full error message
    userLogout.mockClear();
  });

  
  it('dispatches logoutUser for SUBMIT_ERROR 401 and returns result of next(action)', () => {
    const action = {
      type: 'SUBMIT_ERROR',
      payload: { status: 401 },
    };
    const result = dispatch(action);
    
    expect(result).toBe(action);
    
    expect(userLogout).toHaveBeenCalled();
  });

  
  it('only returns result of next(action) when not a SUBMIT_ERROR', () => {
    const action = {
      type: 'SOME_ERROR',
      payload: { status: 401 },
    };
    const result = dispatch(action);
    
    expect(result).toBe(action);
    
    expect(userLogout).not.toHaveBeenCalled();
  });

  
  it('only returns result of next(action) when SUBMIT_ERROR but not 401', () => {
    const action = {
      type: 'SUBMIT_ERROR',
      payload: { status: 503 },
    };
    const result = dispatch(action);
    
    expect(result).toBe(action);
    
    expect(userLogout).not.toHaveBeenCalled();
  });
});
