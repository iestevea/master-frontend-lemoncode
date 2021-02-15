import { Injectable } from '@angular/core';
import { ImageItem } from '../model/image-item';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImages(): ImageItem[] {
    return [
      {
        id: 1,
        src: "./assets/images/kitty_1.png",
        title: "Kitty 1"
      }, {
        id: 2,
        src: "./assets/images/kitty_2.png",
        title: "Kitty 2"
      },
      {
        id: 3,
        src: "./assets/images/kitty_3.png",
        title: "Kitty 3"
      }, {
        id: 4,
        src: "./assets/images/kitty_4.png",
        title: "Kitty 4"
      },
      {
        id: 5,
        src: "./assets/images/puppy_1.png",
        title: "Puppy 1"
      }, {
        id: 6,
        src: "./assets/images/puppy_2.png",
        title: "Puppy 2"
      },
      {
        id: 7,
        src: "./assets/images/puppy_3.png",
        title: "Puppy 3"
      }, {
        id: 8,
        src: "./assets/images/puppy_4.png",
        title: "Puppy 4"
      }
    ]
  }
}
