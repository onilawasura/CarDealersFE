import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getAdvertisementUrl: string;

  getAdvertisements(){
    this.getAdvertisementUrl  = this.BaseURI + '/advertistment/GetAllAdvertisment';
    //var requestHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.getAdvertisementUrl);
  }

}
