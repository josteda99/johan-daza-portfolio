import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ImageInformationI } from '../interfaces/image-information.interface';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { MatDialog } from '@angular/material/dialog';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-full-gallery',
  templateUrl: './full-gallery.component.html',
  styleUrls: ['./full-gallery.component.scss'],
})
export class FullGalleryComponent implements OnInit {
  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;
  private dialog = inject(MatDialog);
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };
  public images: ImageInformationI[] = [
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/1.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/2.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/3.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/13.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/5.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/6.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/7.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/13.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/9.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/13.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'assets/photos/gallery/11.jpg',
    },
  ];

  public ngOnInit(): void {
    this.randomGallery();
  }

  public randomGallery(): void {
    let currentIndex = this.images.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.images[currentIndex], this.images[randomIndex]] = [
        this.images[randomIndex],
        this.images[currentIndex],
      ];
    }
  }

  public openDialog(image: ImageInformationI): void {
    this.dialog.open(ImagePreviewComponent, {
      data: { image },
    });
  }

  public copyEmailClipboard(): void {
    navigator.clipboard.writeText('josteda99@gmail.com');
    alert('Copiado...');
  }
}
