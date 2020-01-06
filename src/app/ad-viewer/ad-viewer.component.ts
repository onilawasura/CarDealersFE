import { Component, OnInit } from '@angular/core';
import { AdViewerService } from './ad-viewer.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/Sahred/user.service';

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

  isUserLogged = false;
  lstComments: any[];

  userDetails = {
    fullName: "",
    email: "",
    userName: "",
    role: "",
    userId: ""
  };


  userComment = {
    Name : "",
    UserId: "",
    AdvertisementId: 0
  }

  constructor(private adViewerService: AdViewerService,  private activatedRoute: ActivatedRoute,  private userService: UserService) { }

  ngOnInit() {

    this.getAdvertisement();
    //this.setImages();

    this.userService.$isLoggedIn
      .subscribe( (data) => {
        console.log("I got data in navbar", data);
        
          this.isUserLogged = data;
          this.onloadGetUserData();
      })

    var token = localStorage.getItem('token');
    if(token != null || this.isUserLogged){
      this.isUserLogged = true;
    }
    this.onloadGetUserData();
    this.getComments();

  }

  onloadGetUserData(){
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails.email = res["email"];
        this.userDetails.fullName = res["fullName"];
        this.userDetails.userName = res["userName"];
        this.userDetails.role = res["role"];
        this.userDetails.userId = res["id"]
      },
      err => {
        console.log(err);
      },
      );
  }

  addComments(){
    this.userComment.AdvertisementId = +this.currentUrlId;
    this.userComment.UserId = this.userDetails.fullName;

    this.adViewerService.addComment(this.userComment)
      .subscribe((data: any) => {
        var xx = data;
        if(data){
          this.userComment.Name = "";
          this.getComments();
        }
      })

  }

  getComments(){
    this.adViewerService.getComments(+this.currentUrlId)
      .subscribe((data:any) => {
        this.lstComments = data;
        console.log("comm" +this.lstComments);
      })
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

addToFavourite(){
  
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


