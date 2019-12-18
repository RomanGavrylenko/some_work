import { takeLatest, call, put, select } from 'redux-saga/effects';
import { 
  OPEN_ART_LIST,
  openArtlistSuccess,
  removeArtItemSuccess,
  REMOVE_ART,
} from '../actions/artwork';
import { artWorkData } from '../../services/artwork';


export function* artWorkSaga(){
  yield takeLatest(OPEN_ART_LIST, function*(){
    const data = yield call(artWorkData)
    yield put(openArtlistSuccess(data))
  })

  yield takeLatest(REMOVE_ART, function*(action){
    const artList = yield select(state => (state.artWork.artList))
    const index = artList
      .map(item => (item._id))
      .indexOf(action.payload.id);

    yield put(removeArtItemSuccess(index))
  })
}