import uniqueId from 'lodash.uniqueid'; 

export const ADD_ART = 'sc/artwork/ADD_ART';
export const REMOVE_ART = 'sc/artwork/REMOVE_ART';
export const REMOVE_ART_SUCCESS = 'sc/artwork/REMOVE_ART_SUCCESS';
export const OPEN_ART_LIST = 'sc/artwork/OPEN_ART_LIST';
export const OPEN_ART_LIST_SUCCESS = 'sc/artwork/OPEN_ART_LIST_SUCCESS';

export const addArt = (title ) => {
  
  const newArt = {
    _id: uniqueId('add_'),
    title,
  }
  
  return {
    type: ADD_ART,
    payload: {
      newArt,
    },
  }
}

export const openArtlist = () => {
  return {
    type: OPEN_ART_LIST,
    payload: {},
  }
}

export const openArtlistSuccess = (data) => {
  return {
    type: OPEN_ART_LIST_SUCCESS,
    payload: {
      data,
    },
  }
}

export const removeArtItem = (id) => {
  return {
    type: REMOVE_ART,
    payload: {
      id,
    },
  }
}

export const removeArtItemSuccess = (index) => {
  return {
    type: REMOVE_ART_SUCCESS,
    payload: {
      index,
    },
  }
}