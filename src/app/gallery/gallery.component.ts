import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public images = [
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
    'assets/memologo.png',
  ];

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
