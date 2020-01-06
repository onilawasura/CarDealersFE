import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getAdvertisementByUserUrl: string;

  getAdvertisementByUser(userId){

    var jsonObj = {
      UserId: userId
    }
    this.getAdvertisementByUserUrl = this.BaseURI + '/advertistment/GetAdvertistmentByUser';
    return this.http.post(this.getAdvertisementByUserUrl, jsonObj);
  }

  
}
