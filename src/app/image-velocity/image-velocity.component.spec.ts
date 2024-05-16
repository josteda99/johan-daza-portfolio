import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVelocityComponent } from './image-velocity.component';

describe('ImageVelocityComponent', () => {
  let component: ImageVelocityComponent;
  let fixture: ComponentFixture<ImageVelocityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageVelocityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageVelocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
