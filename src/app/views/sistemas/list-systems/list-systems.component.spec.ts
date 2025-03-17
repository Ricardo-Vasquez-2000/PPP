import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSystemsComponent } from './list-systems.component';

describe('ListSystemsComponent', () => {
  let component: ListSystemsComponent;
  let fixture: ComponentFixture<ListSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
