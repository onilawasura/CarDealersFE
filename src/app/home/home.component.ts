import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeServiceService } from './Shared/home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img: string  = "assets/Bugatti.jpg";
  constructor(private toastr: ToastrService, private homeService: HomeServiceService) { }
  adDetails: any;

  ngOnInit() {
   // this.toastr.success('Hello world!', 'Toastr fun!');
   this.getAllAdvertisements();
  }

  getAllAdvertisements(){
    this.homeService.getAdvertisements()
      .subscribe((data: any) => {
        console.log(data);
        var xx =data;
        this.adDetails = data;
      })
  }

}
