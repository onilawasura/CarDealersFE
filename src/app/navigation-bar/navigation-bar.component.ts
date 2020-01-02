import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/Sahred/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  isUserLogged = false;
  userDetails = {
    fullName: "",
    email: "",
    userName: "",
    role: "",
    userId: ""
  };

  ngOnInit() {
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

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.isUserLogged = false;
    this.userDetails.email = "";
      this.userDetails.fullName = "";
      this.userDetails.userName = "";
      this.userDetails.role = "";
      this.userDetails.userId = ""
  }

}
