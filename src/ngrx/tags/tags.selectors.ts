import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TagsState } from './tags.reducer';

export const selectTagsState = createFeatureSelector<TagsState>('tags');

export const selectTags = createSelector(selectTagsState, (state) => state.tags);
export const selectTagsLoading = createSelector(selectTagsState, (state) => state.loading);
export const selectTagsError = createSelector(selectTagsState, (state) => state.error);
