import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];


export const store = createStore(rootReducer, applyMiddleware(...middlewares));


sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default {store, persistor};