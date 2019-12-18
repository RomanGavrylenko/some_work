import createSagaMiddleware from 'redux-saga';

import { artWorkSaga } from './artwork';
import { notesSaga } from './notes';

export const sagaMiddleware = createSagaMiddleware();

export function rootSaga(){
  sagaMiddleware.run(artWorkSaga);
  sagaMiddleware.run(notesSaga);
}