import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemophotoComponent } from './memophoto.component';

describe('MemophotoComponent', () => {
  let component: MemophotoComponent;
  let fixture: ComponentFixture<MemophotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemophotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemophotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
