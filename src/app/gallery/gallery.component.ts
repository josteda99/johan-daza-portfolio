import { Component, OnInit, inject } from '@angular/core';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ImageInformationI } from '../interfaces/image-information.interface';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { allPhotos } from '../constants/images-mapper';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private dialog = inject(MatDialog);
  public images: ImageInformationI[] = allPhotos.filter((photo) => photo.important);
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;
  public isMobile = false;

  public ngOnInit(): void {
    this.isMobile = window.innerWidth <= 800;
  }

  public openDialog(image: ImageInformationI): void {
    this.dialog.open(ImagePreviewComponent, {
      data: { image },
      backdropClass: 'backdropBackground'
    });
  }

  public copyEmailClipboard(): void {
    navigator.clipboard.writeText('josteda99@gmail.com');
    alert('Copiado...');
  }
}
