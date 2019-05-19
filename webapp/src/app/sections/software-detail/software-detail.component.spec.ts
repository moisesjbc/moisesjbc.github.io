import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjectComponent } from './software-project-detail.component';

describe('SoftwareProjectComponent', () => {
  let component: SoftwareProjectComponent;
  let fixture: ComponentFixture<SoftwareProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
