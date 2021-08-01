import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1SidebarComponent } from './ex1-sidebar.component';

describe('Ex1SidebarComponent', () => {
  let component: Ex1SidebarComponent;
  let fixture: ComponentFixture<Ex1SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
