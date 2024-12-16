import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../services/browser-history.ts';
import {Middleware} from 'redux';
import { rootReducer } from '../root-reducer.ts';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'city/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
