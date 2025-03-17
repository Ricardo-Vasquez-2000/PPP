import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemsComponent } from './add-systems.component';

describe('AddSystemsComponent', () => {
  let component: AddSystemsComponent;
  let fixture: ComponentFixture<AddSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
