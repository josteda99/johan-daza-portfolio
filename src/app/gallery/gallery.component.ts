import { Component } from '@angular/core';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ImageInformationI } from '../interfaces/image-information.interface';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public images: ImageInformationI[] = [
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/1.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/2.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/3.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/4.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/5.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/6.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/7.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/8.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/9.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/10.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: '/assets/photos/gallery/11.jpg',
    },
  ];
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;
}
