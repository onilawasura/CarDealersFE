import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/myprofile-home/profile.service';
import { UserService } from 'src/app/user/Sahred/user.service';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css']
})
export class MyFavouriteComponent implements OnInit {


  userDetails = {
    fullName: "",
    email: "",
    userName: "",
    role: "",
    userId: ""
  };

  adDetails: any;
  filteredAdDetails: any;

  constructor(private profileService: ProfileService, private userService: UserService) { }

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails.email = res["email"];
        this.userDetails.fullName = res["fullName"];
        this.userDetails.userName = res["userName"];
        this.userDetails.role = res["role"];
        this.userDetails.userId = res["id"];
        this.getuserFavouriteAdvertismentByUser();
      },
      err => {
        console.log(err);
      },
      );
  }

getuserFavouriteAdvertismentByUser(){
  this.profileService.getFavouriteAdvertisementByUser(this.userDetails.userId)
    .subscribe((data: any) => {
      this.adDetails = data;
      this.filteredAdDetails = this.adDetails;
    });
}


}
