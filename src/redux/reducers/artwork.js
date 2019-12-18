import { 
  ADD_ART,
  OPEN_ART_LIST_SUCCESS,
  REMOVE_ART_SUCCESS,
} from '../actions/artwork';

const initialData = {
  artList: [],
}

export default (state=initialData, action) => {
  switch(action.type){
    case OPEN_ART_LIST_SUCCESS:
      return {
        ...state,
        artList: action.payload.data,
      }

    case ADD_ART: 
      return {
        ...state,
        artList: [...state.artList, action.payload.newArt ],
      }

    case REMOVE_ART_SUCCESS:
      const { index } = action.payload;
      return {
        ...state,
        artList: [...state.artList.slice(0, index), ...state.artList.slice(index+1)],
      };

    default: return state
  }
}