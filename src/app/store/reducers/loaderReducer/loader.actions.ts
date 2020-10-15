import {createAction, props} from '@ngrx/store';

export const SET_LOADER = 'LOADER/SET_LOADER';

export interface SetLoaderAction {
  type: typeof SET_LOADER;
  api: boolean;
}

export const setLoader = createAction(
  SET_LOADER,
  props<{ api: boolean }>()
);
