import {
  GET_CLOTHES,
  SHIRTS,
  PANTS,
  SHOES,
  SET_SELECTED_OUTFIT,
} from './actions';

initialState = {clothes: [], shirts: [], pants: [], shoes: [], outfit: {}};

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
    case SET_SELECTED_OUTFIT:
      console.log({...state});
      const curOutfit = {...state.outfit};
      curOutfit[action.payload.type] = {
        color: action.payload.color,
        size: action.payload.size,
        id: action.payload.id,
      };
      return {
        ...state,
        outfit: curOutfit,
      };

    default:
      return state;
  }
}

export default userReducer;
