import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { UserService } from 'src/app/user/Sahred/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private profileService: ProfileService, private userService: UserService) { }

  adDetails: any;
  filteredAdDetails: any;

  userDetails = {
    fullName: "",
    email: "",
    userName: "",
    role: "",
    userId: ""
  };

  ngOnInit() {
    

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails.email = res["email"];
        this.userDetails.fullName = res["fullName"];
        this.userDetails.userName = res["userName"];
        this.userDetails.role = res["role"];
        this.userDetails.userId = res["id"]
        this.getAllAdvertisements();
      },
      err => {
        console.log(err);
      },
      );
  }

  getAllAdvertisements(){
    this.profileService.getAdvertisementByUser("12345")
      .subscribe((data: any) => {
        var xx =data;
        this.adDetails = data;
        this.filteredAdDetails = this.adDetails;
        console.log(this.filteredAdDetails.length);
      })
  }



}
