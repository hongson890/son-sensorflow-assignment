import { createStore } from 'redux';
import rootReducer from '../root.reducers';
import { initialState } from '../../features/users/users.reducers';

describe('rootReducer', () => {
  it('has necessary reducers injected', () => {
    const store = createStore(rootReducer);

    expect(store.getState().users).toEqual(initialState);
  });
});
