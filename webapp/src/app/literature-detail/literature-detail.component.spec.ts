import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureDetailComponent } from './literature-detail.component';

describe('LiteratureDetailComponent', () => {
  let component: LiteratureDetailComponent;
  let fixture: ComponentFixture<LiteratureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteratureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
