import {combineReducers} from '@reduxjs/toolkit';
import {NAMESPACE} from '../mocks/slice-headers.ts';
import { dataProcess } from './dataProcess/dataProcess.ts';
import { cityProcess } from './city-process/city-process.ts';
import { userProcess } from './userProcess/userProcess.ts';

export const rootReducer = combineReducers({
  [NAMESPACE.USER]: userProcess.reducer,
  [NAMESPACE.DATA]: dataProcess.reducer,
  [NAMESPACE.CITY]: cityProcess.reducer,
});
