import {
  GET_CLOTHES,
  SET_SELECTED_OUTFIT,
  SET_COMPLETE_OUTFITS,
} from './actions';

initialState = {clothes: {}, outfit: {}, completeOutfits: []};

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
      // const curClothes = {...state.clothes};

      // if (Object.keys(curOutfit).length === Object.keys(curClothes).length) {

      // } else {
      curOutfit[action.payload.type] = {
        color: action.payload.color,
        size: action.payload.size,
        id: action.payload.id,
      };

      return {
        ...state,
        outfit: curOutfit,
      };

    case SET_COMPLETE_OUTFITS:
      return {
        ...state,
        completeOutfits: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
