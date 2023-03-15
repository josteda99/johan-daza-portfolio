import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasskingComponent } from './rassking.component';

describe('RasskingComponent', () => {
  let component: RasskingComponent;
  let fixture: ComponentFixture<RasskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RasskingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RasskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
