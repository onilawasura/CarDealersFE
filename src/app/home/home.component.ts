import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img: string  = "assets/Bugatti.jpg";
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
   // this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
