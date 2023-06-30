import { createReducer, on } from '@ngrx/store';
import {
  loadTags,
  loadTagsSuccess,
  loadTagsFailure,
  addTag,
  addTagSuccess,
  addTagFailure,
} from './tags.actions';
import { Tag } from 'src/interfaces/tags/tags.interface';

export interface TagsState {
  tags: Tag[];
  loading: boolean;
  error: any;
}

const initialState: TagsState = {
  tags: [],
  loading: false,
  error: null,
};

export const tagsReducer = createReducer(
  initialState,
  on(loadTags, (state) => ({ ...state, loading: true })),
  on(loadTagsSuccess, (state, { tags }) => ({
    ...state,
    tags,
    loading: false,
    error: null,
  })),
  on(loadTagsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(addTag, (state) => ({ ...state, loading: true })),
  on(addTagSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(addTagFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

export function reducer(state: TagsState | undefined, action: any) {
  return tagsReducer(state, action);
}

export const getTags = (state: TagsState) => state.tags;
export const getLoading = (state: TagsState) => state.loading;
export const getError = (state: TagsState) => state.error;
