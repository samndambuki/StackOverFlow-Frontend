import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTagsComponent } from './specific-tags.component';

describe('SpecificTagsComponent', () => {
  let component: SpecificTagsComponent;
  let fixture: ComponentFixture<SpecificTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecificTagsComponent]
    });
    fixture = TestBed.createComponent(SpecificTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
