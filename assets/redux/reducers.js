import {GET_CLOTHES, SET_SELECTED_OUTFIT} from './actions';

initialState = {clothes: {}, outfit: {}};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLOTHES:
      // console.log('????????????', action.payload);
      return {
        ...state,
        clothes: action.payload,
      };

    case SET_SELECTED_OUTFIT:
      // console.log({...state});
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
