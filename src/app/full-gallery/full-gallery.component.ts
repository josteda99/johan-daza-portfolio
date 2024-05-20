import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ImageInformationI } from '../interfaces/image-information.interface';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { MatDialog } from '@angular/material/dialog';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { allPhotos } from '../constants/images-mapper';
import { animate, style } from '@angular/animations';

@Component({
  selector: 'app-full-gallery',
  templateUrl: './full-gallery.component.html',
  styleUrls: ['./full-gallery.component.scss']
})
export class FullGalleryComponent implements OnInit {
  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;
  private dialog = inject(MatDialog);
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    animations: {
      show: [style({ opacity: 0 }), animate('1000ms ease-in', style({ opacity: 1 }))],
      hide: [style({ opacity: '*' }), animate('1000ms ease-in', style({ opacity: 0 }))]
    }
  };
  public images: ImageInformationI[] = allPhotos;

  public ngOnInit(): void {
    this.randomGallery();
  }

  public randomGallery(): void {
    let currentIndex = this.images.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.images[currentIndex], this.images[randomIndex]] = [this.images[randomIndex], this.images[currentIndex]];
    }
  }

  public openDialog(image: ImageInformationI): void {
    this.dialog.open(ImagePreviewComponent, {
      data: { image }
    });
  }

  public copyEmailClipboard(): void {
    navigator.clipboard.writeText('josteda99@gmail.com');
    alert('Copiado...');
  }
}
