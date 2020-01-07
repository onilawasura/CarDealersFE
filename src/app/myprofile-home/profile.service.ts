import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getAdvertisementByUserUrl: string;
  getFavouriteAdvertisementByUserUrl: string;

  getAdvertisementByUser(userId){

    var jsonObj = {
      UserId: userId
    }
    this.getAdvertisementByUserUrl = this.BaseURI + '/advertistment/GetAdvertistmentByUser';
    return this.http.post(this.getAdvertisementByUserUrl, jsonObj);
  }

  getFavouriteAdvertisementByUser(userId){
    this.getFavouriteAdvertisementByUserUrl = this.BaseURI + '/advertistment/GetAdvertismentByFavourite/' +userId;
    return this.http.get(this.getFavouriteAdvertisementByUserUrl);
  }

  
}
