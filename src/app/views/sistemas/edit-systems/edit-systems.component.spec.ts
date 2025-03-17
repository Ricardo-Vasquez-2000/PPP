import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSystemsComponent } from './edit-systems.component';

describe('EditSystemsComponent', () => {
  let component: EditSystemsComponent;
  let fixture: ComponentFixture<EditSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
