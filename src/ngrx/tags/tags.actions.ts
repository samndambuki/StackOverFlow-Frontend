import { createAction, props } from '@ngrx/store';
import { Tag } from 'src/interfaces/tags/tags.interface';

export const loadTags = createAction('[Tags] Load Tags');
export const loadTagsSuccess = createAction(
  '[Tags] Load Tags Success',
  props<{ tags: Tag[] }>()
);
export const loadTagsFailure = createAction(
  '[Tags] Load Tags Failure',
  props<{ error: any }>()
);

export const addTag = createAction(
  '[Tags] Add Tag',
  props<{ tagName: string }>()
);
export const addTagSuccess = createAction(
  '[Tags] Add Tag Success',
  props<{ message: string; tagId: string }>()
);
export const addTagFailure = createAction(
  '[Tags] Add Tag Failure',
  props<{ error: any }>()
);
