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
 // imageObject: Array<object> ;

  constructor(private adViewerService: AdViewerService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getAdvertisement();
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
  // imageObject: [{
  //   image : 'http://localhost:54886//Content/Images//Fol_1/1_1.jpg' // Youtube url
  //   //video: 'https://www.youtube.com/watch?v=dJ0JLKfHGlo'
  // },
  // {
  //   image : 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg' // MP4 Video url
  // },
  // {
  //   image : 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg'
  //    // posterImage: 'assets/img/slider/2_min.jpeg', //Optional: You can use this key if you want to show video poster image in slider
  //    // title: 'Image title'
  // },
  // {
  //   image : 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg'
  //    // thumbImage: 'assets/img/slider/1_min.jpeg',
  //    // alt: 'Image alt'
  // }
  // ];
}

imageObject: Array<object> = [{
  image: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  thumbImage: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  alt: 'Image alt' // Youtube url
},
{
  image: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  thumbImage: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  alt: 'Image alt' // MP4 Video url
},
{
  image: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  thumbImage: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  alt: 'Image alt'
},
{
image: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  thumbImage: 'http://localhost:54886//Content/Images//Fol_1/1_2.jpg',
  alt: 'Image alt'
}
];


}


