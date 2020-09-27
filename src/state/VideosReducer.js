import { storageKeys } from '../utils/constants';
import { storage } from '../utils/storage';

const VideosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SEARCH': {
      return {
        ...state,
        currentSearch: action.payload,
      };
    }
    case 'LOAD_FAVORITES_FROM_STORAGE': {
      const favorites = storage.get(storageKeys.FAVORITE_VIDEOS);
      return {
        ...state,
        favorites,
      };
    }
    case 'ADD_FAVORITE': {
      const favorites = [...state.favorites, action.payload];
      storage.set(storageKeys.FAVORITE_VIDEOS, favorites);
      return {
        ...state,
        favorites,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
      storage.set(storageKeys.FAVORITE_VIDEOS, favorites);
      return {
        ...state,
        favorites,
      };
    }
    default: {
      return state;
    }
  }
};

export default VideosReducer;
