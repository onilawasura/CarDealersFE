import { Component, OnInit } from '@angular/core';
import { CreateAdService } from './create-ad.service';
import { CreateadModel } from './createad-model';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-createad',
  templateUrl: './createad.component.html',
  styleUrls: ['./createad.component.css']
})
export class CreateadComponent implements OnInit {

  // lat: number = 7.430586303916538;
  // lng: number = 80.6451931695691;


  constructor(private createadService: CreateAdService) { }

  categoryData: any;
  brandData: any;

  CreateadModel: CreateadModel = new CreateadModel();

  locationChosen=false;

  latitude: number = 7.430586303916538;
  longitude: number =80.6451931695691;
  printError: any;

  ngOnInit() {
    this.getCategories();
    this.getBrands();
  }

  getCategories(){
    this.createadService.getCategories()
    .subscribe((data: any) => {
        this.categoryData  = data;
    });
  }

  getBrands(){
    this.createadService.getBrands().subscribe((data: any) => {
      this.brandData  = data;
  });
  }

  getSubCategoriesAndBrands(id){
    var xx = id;
  }

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;;
    this.locationChosen = true;
  }

}
