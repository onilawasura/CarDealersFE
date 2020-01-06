import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeServiceService } from './Shared/home-service.service';
import { UserService } from '../user/Sahred/user.service';
import { CreateAdService } from '../createad/create-ad.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img: string  = "assets/Bugatti.jpg";
  constructor(private toastr: ToastrService, private homeService: HomeServiceService, private userService: UserService, private createAdService: CreateAdService) { }
  adDetails: any;
  filteredAdDetails: any;
  private _searchTerm: string;
  userDetails : any;

  locationData:any;
  categoryData: any;

  filteredDataObj = {
    locationId : null,
    categoryId: null,
    maxPrice: null,
    minPrice: null
  }

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
   //this.getAllAdvertisements();
   console.log(moment.locale());
   this.getAdvertisementFiltered(null, null, null, null);

   this.getLocation();
   this.getCategories();

   this.userService.getUserProfile().subscribe(
    res => {
      this.userDetails = res;
    },
    err => {
      console.log(err);
    },
  );   
  }


  getLocation(){
    this.createAdService.getLocations()
      .subscribe((data: any) => {
        this.locationData = data;
      });
  }

  getCategories(){
    this.createAdService.getCategories()
    .subscribe((data: any) => {
        this.categoryData  = data;
    });
  }

  getAdvertisementFiltered(locationId, categoryId, minPrice, maxPrice){
    this.filteredDataObj.locationId = locationId;
    this.filteredDataObj.categoryId = categoryId;

    if(minPrice != undefined){
      if(minPrice != ""){
        this.filteredDataObj.minPrice = +minPrice;
      }else{
        this.filteredDataObj.minPrice = null;
      }
    }else{
      this.filteredDataObj.minPrice = null;
    }

    if(maxPrice != undefined){
      if(maxPrice != ""){
        this.filteredDataObj.maxPrice = +maxPrice;
      }else{
        this.filteredDataObj.maxPrice = null
      }
    }else{
      this.filteredDataObj.maxPrice = null
    }
    

    this.homeService.getAdvertisementFilteredByLocation(this.filteredDataObj)
      .subscribe((data: any) => {
        this.adDetails = data;
        this.filteredAdDetails = this.adDetails;
      })

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
