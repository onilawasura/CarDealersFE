import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAdService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getCategoriesUrl: string;
  getBrandsUrl:string;
  getModelsUrl:string;

  getCategories(){
    this.getCategoriesUrl  = this.BaseURI + '/masterdata/GetAllCategories';
    //var requestHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.getCategoriesUrl);
  }

  getBrands(){
    this.getBrandsUrl  = this.BaseURI + '/masterdata/GetAllBrands';
    //var requestHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.getBrandsUrl);
  }
  
  getModels(brandId){
    this.getModelsUrl = this.BaseURI + '/masterdata/GetAllModels/'+brandId;

    return this.http.get(this.getModelsUrl);

  }

}
