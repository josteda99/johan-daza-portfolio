import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageInformationI } from '../interfaces/image-information.interface';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-full-gallery',
  templateUrl: './full-gallery.component.html',
  styleUrls: ['./full-gallery.component.scss'],
})
export class FullGalleryComponent {
  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;

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

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  masonryImages: any[] = [];
}
