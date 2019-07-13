import {createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers/index'
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

const persistConfig = {
	key: 'root',
	storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

// const pReducer = persistReducer(persistConfig, rootReducer)
// export const store = createStore(pReducer);
// export const persistor = persistStore(store);

// const configureStore = (preloadedState) => {
// 	const store = createStore(
// 		// rootReducer,
// 		persistedReducer,
// 		// preloadedState,
// 		// compose(
// 		// 	applyMiddleware(loggerMiddleware),
// 		// 	// autoRehydrate()
// 		// )
// 	)

// 	console.log("store.getState() =", store.getState())

// 	// if (module.hot) {
// 	// 	module.hot.accept('../reducers', () => {
// 	// 		store.replaceReducer(rootReducer)
// 	// 	})
// 	// }

// 	return store
// }

export const store = createStore(persistedReducer, compose(applyMiddleware(loggerMiddleware)))
export const persistor = persistStore(store)
