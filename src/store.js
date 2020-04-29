import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

// importing `redux-beacon-electron` modules below will cause this error in Electron JS console:
//      Uncaught TypeError: fs.existsSync is not a function
import { 
    createElectronGoogleAnalyticsTarget, 
    actionMetaEventMapper as eventsMapper
} from 'redux-beacon-electron'

const electronTarget = createElectronGoogleAnalyticsTarget({ua: 'UA-XXXX'})
const gaMiddleware = createMiddleware(eventsMapper, electronTarget)

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    push,
  };

  const reducers = {
    router: connectRouter(routerHistory),
  };

  const middlewares = [thunk, router, gaMiddleware];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState());
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}
