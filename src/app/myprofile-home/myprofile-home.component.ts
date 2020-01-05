import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile-home',
  templateUrl: './myprofile-home.component.html',
  styleUrls: ['./myprofile-home.component.css']
})
export class MyprofileHomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


  }

  show(){
    this.router.navigate(['account'], {relativeTo: this.route});
  }

}
