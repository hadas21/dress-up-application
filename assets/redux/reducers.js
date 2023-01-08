import {
  GET_CLOTHES,
  SET_SELECTED_OUTFIT,
  SET_COMPLETE_OUTFITS,
} from './actions';

initialState = {clothes: {}, outfit: {}, completeOutfits: []};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLOTHES:
      return {
        ...state,
        clothes: action.payload,
      };

    case SET_SELECTED_OUTFIT:
      const newOutfit = action.payload;
      if (Object.keys(newOutfit).length === 0) {
        return {
          ...state,
          outfit: newOutfit,
        };
      } else {
        const curOutfit = {...state.outfit};

        curOutfit[newOutfit.type] = {
          color: action.payload.color,
          size: action.payload.size,
          id: action.payload.id,
          name: action.payload.name,
        };

        return {
          ...state,
          outfit: curOutfit,
        };
      }

    case SET_COMPLETE_OUTFITS:
      const payload = action.payload;
      console.log('outfit payload: ', action.payload);
      if (Object.keys(payload).length === 0) {
        return state;
      } else {
        return {
          ...state,
          completeOutfits: [...state.completeOutfits, action.payload],
        };
      }
    default:
      return state;
  }
}

export default userReducer;
