import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListAgeComponent } from './student-list-age.component';

describe('StudentListAgeComponent', () => {
  let component: StudentListAgeComponent;
  let fixture: ComponentFixture<StudentListAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
