import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { basename } from 'path';

@Injectable({
  providedIn: 'root'
})
export class CreateAdService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getCategoriesUrl: string;
  getBrandsUrl:string;
  getModelsUrl:string;
  getLocationsUrl: string;
  createadUrl:string;
  fileUploadUrl: string;

  getCategories(){
    this.getCategoriesUrl  = this.BaseURI + '/masterdata/GetAllCategories';
    //var requestHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.getCategoriesUrl);
  }

  getBrands(){
    this.getBrandsUrl  = this.BaseURI + '/masterdata/GetAllBrands';
    //va  r requestHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.getBrandsUrl);
  }
  
  getModels(brandId){
    this.getModelsUrl = this.BaseURI + '/masterdata/GetAllModels/'+brandId;
    return this.http.get(this.getModelsUrl);
  }

    getLocations(){
      this.getLocationsUrl = this.BaseURI + '/masterdata/GetAllLocations';
      return this.http.get(this.getLocationsUrl);
    }
  

  createAdvertisment(createadModel){

    this.createadUrl = this.BaseURI + '/advertistment/AddAdvertisment';
    return this.http.post<any>(this.createadUrl, createadModel);
  }

  uploadFiles(formData){
    this.fileUploadUrl = this.BaseURI + '/fileupload';
    return this.http.post<any>(this.fileUploadUrl, formData);
  }

}
