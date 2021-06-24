import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import eventReducer from './eventReducer';
import attendanceReducer from './attendanceReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'error', 'events', 'attendance'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  events: eventReducer,
  attendance: attendanceReducer,
});

export default persistReducer(persistConfig, rootReducer);
