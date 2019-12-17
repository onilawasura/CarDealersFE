import { Component, OnInit } from '@angular/core';
import { UserService } from '../Sahred/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
    
  }

}
