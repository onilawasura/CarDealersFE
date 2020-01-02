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
  modelData: any;
  locationData:any;
  advertisementId: any;

  myFiles:string [] = [];

  CreateadModel: CreateadModel = new CreateadModel();

  locationChosen=false;

  latitude: number = 7.430586303916538;
  longitude: number =80.6451931695691;
  printError: any;


  //temp
  selecteFile: File = null;

  ngOnInit() {
    this.getCategories();
    this.getBrands();
    this.getLocation();
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

  getModelsbyBrand(brandId){
    this.createadService.getModels(brandId)
      .subscribe((data : any) => {
        this.modelData = data;
      });
  }

  getLocation(){
    this.createadService.getLocations()
      .subscribe((data: any) => {
        this.locationData = data;
      });
  }

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;;
    this.locationChosen = true;
  }

  saveadvetisment(adModel){
    //this.CreateadModel.CategoryId = +adModel["CategoryId"];
    //var xx = [...adModel];
    adModel.CategoryId = +adModel["CategoryId"];
    adModel.FkLocationId = +adModel["FkLocationId"];
    adModel.FkBrandId = +adModel["FkBrandId"];
    adModel.Price = +adModel["Price"];
    adModel.ModelYear = +adModel["ModelYear"];
    adModel.Condition = (adModel["Conditio"] === "true");
    adModel.FuelType = +(adModel["Fuel"])
    this.createadService.createAdvertisment(adModel)
      .subscribe((data: any) => {
        this.advertisementId = data["id"];
        this.uploadFiles(this.advertisementId);

      }, (error: any) =>{
         console.log(error);
      });
  }

  getFileDetails(e){
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles(id){
    const frmData = new FormData();

    if(id == null){
      id = 1;
    }

    frmData.append("adId", id);

   for (var i = 0; i < this.myFiles.length; i++) { 
    frmData.append("fileUpload", this.myFiles[i]);
  }
  

    this.createadService.uploadFiles(frmData)
      .subscribe((data: any) => {
        alert(data["message"]);
      }, error => {
        console.log(error);
      })

  }

}
