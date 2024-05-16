import { Component, Input } from '@angular/core';
import { ImageInformationI } from '../interfaces/image-information.interface';
@Component({
  selector: 'app-image-velocity',
  templateUrl: './image-velocity.component.html',
  styleUrls: ['./image-velocity.component.scss'],
})
export class ImageVelocityComponent {
  @Input() public imageInfo!: ImageInformationI;
  @Input() public velocities: string = '';
}
