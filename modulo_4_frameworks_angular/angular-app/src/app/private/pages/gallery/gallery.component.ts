import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/model/image-item';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: ImageItem[] = [];
  selectedImage: number = 1;
  interval: any;
  beginSlice: number = 0;
  endSlice: number = 3;

  constructor(service: ImagesService) {
    this.images = service.getImages();
  }

  ngOnInit(): void {
  }

  nextImage() {
    this.selectedImage++;
    if (this.selectedImage > this.endSlice) {
      this.beginSlice++;
      this.endSlice++;
    }
  }

  previousImage() {
    this.selectedImage--;
    if (this.beginSlice !== 0 && this.selectedImage < this.beginSlice + 1) {
      this.beginSlice--;
      this.endSlice--;
    }
  }

  increase(target: any) {
    console.log(target)
  }

  decrease(target: any) {

  }

  restart() {
    this.selectedImage = 1;
    this.beginSlice = 0;
    this.endSlice = 3;
  }

  play() {
    this.interval = setInterval(() => {
      if (this.selectedImage < this.images.length) {
        this.nextImage();
      } else if (this.selectedImage === this.images.length) {
        this.restart()
      } else {
        this.previousImage();
      }
    }, 2000);
  }

  stop() {
    console.log(this.interval);
    clearInterval(this.interval);
    this.interval = null;
  }

  renderImg(id: number) {
    this.selectedImage = id;
  }

}
