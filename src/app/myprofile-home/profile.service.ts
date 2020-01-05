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
    this.getAdvertisementByUserUrl = this.BaseURI + '/advertistment/GetAdvertistmentByUser/' +userId;
    return this.http.get(this.getAdvertisementByUserUrl);
  }

  
}
