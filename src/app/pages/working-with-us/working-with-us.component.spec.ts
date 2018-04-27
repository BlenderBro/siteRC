import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithUsComponent } from './working-with-us.component';

describe('WorkingWithUsComponent', () => {
  let component: WorkingWithUsComponent;
  let fixture: ComponentFixture<WorkingWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
