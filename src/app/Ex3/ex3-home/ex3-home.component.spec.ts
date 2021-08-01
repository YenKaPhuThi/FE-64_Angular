import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3HomeComponent } from './ex3-home.component';

describe('Ex3HomeComponent', () => {
  let component: Ex3HomeComponent;
  let fixture: ComponentFixture<Ex3HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
