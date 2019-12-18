import { ADD_NOTE } from '../actions/notes';
import { takeLatest, select } from 'redux-saga/effects';

export function* notesSaga(){
  yield takeLatest(ADD_NOTE, function*(){
    const notes = yield select ((state) => {
      return state.notes;
    })

    localStorage.setItem('notes', JSON.stringify(notes));
  })
}