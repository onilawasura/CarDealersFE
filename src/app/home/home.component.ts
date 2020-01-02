import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeServiceService } from './Shared/home-service.service';
import { UserService } from '../user/Sahred/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img: string  = "assets/Bugatti.jpg";
  constructor(private toastr: ToastrService, private homeService: HomeServiceService, private userService: UserService) { }
  adDetails: any;
  filteredAdDetails: any;
  private _searchTerm: string;
  userDetails : any;

  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredAdDetails = this.filteredAdDetailss(value);
  }

  // filteredAdDetailss(searchString: string){
  //   return this.adDetails.filter(ad =>
  //     ad.adTitle.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  // }

    filteredAdDetailss(searchString: string){
    return this.adDetails.filter(ad =>
      ad.adTitle.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
      ad.destination.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
      ad.categoryType.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }


  ngOnInit() {
   // this.toastr.success('Hello world!', 'Toastr fun!');
   this.getAllAdvertisements();

   this.userService.getUserProfile().subscribe(
    res => {
      this.userDetails = res;
    },
    err => {
      console.log(err);
    },
  );


   
  }

  getAllAdvertisements(){
    this.homeService.getAdvertisements()
      .subscribe((data: any) => {
       // console.log(data);
        var xx =data;
        this.adDetails = data;
        this.filteredAdDetails = this.adDetails;
      })
  }

}
