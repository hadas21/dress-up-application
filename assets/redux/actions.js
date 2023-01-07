import clothes from '../utils/clothesEnum';

export const GET_CLOTHES = 'GET_CLOTHES';
export const SET_SELECTED_OUTFIT = 'SET_SELECTED_OUTFIT';
export const SET_COMPLETE_OUTFITS = 'SET_COMPLETE_OUTFITS';

const API_URL =
  'http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms';

export const getClothes = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await result.json();
      if (json) {
        const resultArr = json.results;
        const filteredItems = resultArr.reduce((prev, cur) => {
          if (prev[cur.type]) {
            prev[cur.type].push(cur);
          } else {
            prev[cur.type] = [cur];
          }
          return prev;
        }, {});

        dispatch({
          type: GET_CLOTHES,
          payload: filteredItems,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setSelectedOutfit = selectedItem => dispatch => {
  try {
    // console.log('action!!!!!!!!!', selectedItem);
    dispatch({
      type: SET_SELECTED_OUTFIT,
      payload: selectedItem,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCompleteoutfits = completeOutfit => dispatch => {
  try {
    console.log('action!!!!!!!!!', completeOutfit);
    dispatch({
      type: SET_COMPLETE_OUTFITS,
      payload: completeOutfit,
    });
  } catch (error) {
    console.log(error);
  }
};
