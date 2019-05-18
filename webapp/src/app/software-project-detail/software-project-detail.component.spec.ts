import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjectDetailComponent } from './software-project-detail.component';

describe('SoftwareProjectDetailComponent', () => {
  let component: SoftwareProjectDetailComponent;
  let fixture: ComponentFixture<SoftwareProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
