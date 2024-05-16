import { Component } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faBehance,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
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
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg',
    },
    {
      important: true,
      alt: 'foto',
      title: 'foto',
      description: 'foto',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg',
    },
  ];
  public faInstagram = faInstagram;
  public faYoutube = faYoutube;

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    let index = 0;
    while (index < array.length) {
      chunks.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }
    console.log(chunks);
    return chunks;
  }
}
// https://codepen.io/t_afif/pen/abGvYVX
