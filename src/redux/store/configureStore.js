import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/';
import { rootSaga, sagaMiddleware } from '../sagas/root';

export default function() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  rootSaga();

  return store
}