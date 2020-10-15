import {setLoader, SetLoaderAction} from './loader.actions';
import {createReducer, on} from '@ngrx/store';

export const initialState = {
  api: true
};

export type LoaderState = typeof initialState;

const loader = createReducer(
  initialState,
  on(setLoader, (state: LoaderState, action) => ({
      ...state,
      ...action
    })
  )
);

export const loaderReducer = (state: LoaderState | undefined, action: SetLoaderAction) => {
  return loader(state, action);
};
