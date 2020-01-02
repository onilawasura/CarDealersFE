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
  userDetails : any;

  ngOnInit() {
    this.userService.$isLoggedIn
      .subscribe( (data) => {
        console.log("I got data in navbar", data);
        
          this.isUserLogged = data;
      })

    var token = localStorage.getItem('token');
    if(token != null || this.isUserLogged){
      this.isUserLogged = true;
    }


   this.userService.getUserProfile().subscribe(
    res => {
      this.userDetails = res;
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
  }

}
