import { Component, Input, inject } from '@angular/core';
import { ImageInformationI } from '../interfaces/image-information.interface';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
@Component({
  selector: 'app-image-velocity',
  templateUrl: './image-velocity.component.html',
  styleUrls: ['./image-velocity.component.scss']
})
export class ImageVelocityComponent {
  private dialog = inject(MatDialog);

  @Input() public imageInfo!: ImageInformationI;
  @Input() public velocities: string = '';

  public openDialog(): void {
    this.dialog.open(ImagePreviewComponent, {
      data: { image: this.imageInfo },
      backdropClass: 'backdropBackground'
    });
  }
}
