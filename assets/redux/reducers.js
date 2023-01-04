import {GET_CLOTHES, SHIRTS, PANTS, SHOES} from './actions';

initialState = {clothes: [], shirts: [], pants: [], shoes: []};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLOTHES:
      return {
        ...state,
        clothes: action.payload,
      };
    case SHIRTS:
      return {
        ...state,
        shirts: action.payload,
      };
    case PANTS:
      return {
        ...state,
        pants: action.payload,
      };
    case SHOES:
      return {
        ...state,
        shoes: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
