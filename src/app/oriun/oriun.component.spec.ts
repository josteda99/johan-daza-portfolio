import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriunComponent } from './oriun.component';

describe('OriunComponent', () => {
  let component: OriunComponent;
  let fixture: ComponentFixture<OriunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
