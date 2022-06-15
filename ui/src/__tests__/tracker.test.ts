import Piwik from 'react-piwik';
import { List } from 'immutable';

import { setUserCategoryFromRoles } from '../tracker';

jest.mock('react-piwik');

describe('tracker', () => {
  beforeAll(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'CONFIG' does not exist on type 'Window &... Remove this comment to see the full error message
    window.CONFIG = {};
  });

  beforeEach(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'CONFIG' does not exist on type 'Window &... Remove this comment to see the full error message
    window.CONFIG = {
      REACT_APP_PIWIK_URL: 'some',
      REACT_APP_PIWIK_SITE_ID: '1',
    };
  });

  afterEach(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'CONFIG' does not exist on type 'Window &... Remove this comment to see the full error message
    window.CONFIG = {};
    // @ts-ignore
    Piwik.push.mockClear();
  });

  describe('setUserCategoryFromRoles', () => {
    it('sets Superuser if user has superuser role', async () => {
      await setUserCategoryFromRoles(List(['superuser', 'cataloger']));
      expect(Piwik.push).toHaveBeenCalledWith([
        'setCustomVariable',
        1,
        'UserCategory',
        'Superuser',
      ]);
    });

    it('sets Cataloger if user has cataloger role', async () => {
      await setUserCategoryFromRoles(List(['cataloger', 'another']));
      expect(Piwik.push).toHaveBeenCalledWith([
        'setCustomVariable',
        1,
        'UserCategory',
        'Cataloger',
      ]);
    });

    it('sets User if user does not have superuser or cataloger role', async () => {
      await setUserCategoryFromRoles(List(['another']));
      expect(Piwik.push).toHaveBeenCalledWith([
        'setCustomVariable',
        1,
        'UserCategory',
        'User',
      ]);
    });

    it('sets User if user does not have any role', async () => {
      await setUserCategoryFromRoles(List([]));
      expect(Piwik.push).toHaveBeenCalledWith([
        'setCustomVariable',
        1,
        'UserCategory',
        'User',
      ]);
    });
  });
});
