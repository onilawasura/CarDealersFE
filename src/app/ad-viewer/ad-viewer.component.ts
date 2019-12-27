import { Component, OnInit } from '@angular/core';
import { AdViewerService } from './ad-viewer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-viewer',
  templateUrl: './ad-viewer.component.html',
  styleUrls: ['./ad-viewer.component.css']
})
export class AdViewerComponent implements OnInit {

  currentUrlId: string;
  images: string[];
  advertisment: any;
  imageObject: Array<object> ;

  constructor(private adViewerService: AdViewerService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getAdvertisement();
    //this.setImages();
  }

   
getAdvertisement(){

  this.activatedRoute.params.subscribe(paramsId => {
    this.currentUrlId = paramsId.id;
  });

  this.adViewerService.getAdvertisement(this.currentUrlId)
  .subscribe((data: any) => {
    this.advertisment = data;
    this.images = data["urls"];
    console.log(data + "aaa");
    //console.log(this.imageObject + "ssss");
    this.setImages(this.images);

  });
}

setImages(img){
  this.imageObject = [{
    image: img[0],
    thumbImage: img[0],
    alt: 'Image alt' 
  },
  {
    image: img[1],
    thumbImage: img[1],
    alt: 'Image alt' 
  },
  {
    image: img[2],
    thumbImage: img[2],
    alt: 'Image alt' 
  },
  {
    image: img[3],
    thumbImage: img[3],
    alt: 'Image alt' 
  },
  {
    image: img[4],
    thumbImage: img[4],
    alt: 'Image alt' 
  }
  ];
}

}


