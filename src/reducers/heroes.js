import { LOAD_HEROES_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_HEROES_SUCCESS:
      return action.payload.data.data.results;

    default:
      return state;
  }
};
