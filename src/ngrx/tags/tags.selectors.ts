import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TagsState } from './tags.reducer';

// feature state
export const selectTagsState = createFeatureSelector<TagsState>('tags');

//  tags array
export const selectTags = createSelector(selectTagsState, state=> state.tags);



// loading state
export const selectLoading = createSelector(
  selectTagsState,
  (state: TagsState) => state.loading
);

// error state
export const selectError = createSelector(
  selectTagsState,
  (state: TagsState) => state.error
);
