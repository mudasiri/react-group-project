import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../components/missions/missions';

jest.mock('../redux/missions/missionsSlice', () => ({
  fetchMissions: jest.fn(),
}));
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Missions component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      missions: [
        {
          id: '7',
          name: 'Seven',
          description: 'Seven is Divine',
          reserved: true,
        },
        {
          id: '11',
          name: 'Eleven',
          description: 'rhymes with seven',
          reserved: false,
        },
      ],
    });
  });
  it('renders mission data', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.getByText('Seven')).toBeInTheDocument();
    expect(screen.getByText('Seven is Divine')).toBeInTheDocument();
    expect(screen.getByText('Active Member')).toBeInTheDocument();
    expect(screen.getByText('Eleven')).toBeInTheDocument();
    expect(screen.getByText('rhymes with seven')).toBeInTheDocument();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
