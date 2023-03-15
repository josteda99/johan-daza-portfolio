import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadScreenEndComponent } from './load-screen-end.component';

describe('LoadScreenEndComponent', () => {
  let component: LoadScreenEndComponent;
  let fixture: ComponentFixture<LoadScreenEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadScreenEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadScreenEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
