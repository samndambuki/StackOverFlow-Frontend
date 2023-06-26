import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


import { Tag } from 'src/interfaces/tags/tags.interface';
import { TagsService } from 'src/services/tags/tags.service';
import { addTag, addTagFailure, addTagSuccess, loadTags, loadTagsFailure, loadTagsSuccess } from './tags.actions';

@Injectable()
export class TagsEffects {
  constructor(private actions$: Actions, private tagsService: TagsService) {}

  loadTags$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTags),
      switchMap(() =>
        this.tagsService.getTags().pipe(
          map((tags: Tag[]) => loadTagsSuccess({ tags })),
          catchError((error) => of(loadTagsFailure({ error: error.message })))
        )
      )
    )
  );

  addTag$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(addTag),
      switchMap((action) =>
        this.tagsService.addTag(action.tagName).pipe(
          map((response: { message: string; tagId: string }) => addTagSuccess({ message: response.message, tagId: response.tagId })),
          catchError((error) => of(addTagFailure({ error: error.message })))
        )
      )
    )
  );
}
