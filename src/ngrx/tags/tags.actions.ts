import { createAction, props } from '@ngrx/store';
import { Tag } from 'src/interfaces/tags/tags.interface';

// Load tags
export const loadTags = createAction('[Tags] Load Tags', props<{ token: string }>());
export const loadTagsSuccess = createAction('[Tags] Load Tags Success', props<{ tags: Tag[] }>());
export const loadTagsFailure = createAction('[Tags] Load Tags Failure', props<{ error: any }>());

// Add tag
export const addTag = createAction('[Tags] Add Tag', props<{ tagName: string, token: string }>());
export const addTagSuccess = createAction('[Tags] Add Tag Success', props<{ response: { message: string; tagId: string } }>());
export const addTagFailure = createAction('[Tags] Add Tag Failure', props<{ error: any }>());
