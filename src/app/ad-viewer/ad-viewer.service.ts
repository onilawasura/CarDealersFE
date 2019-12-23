import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdViewerService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getAdvertisementUrl: string;

  getAdvertisement(id){
    this.getAdvertisementUrl  = this.BaseURI + '/advertistment/GetAdvertisment/'+id;
    //var requestHeader = new HttpHeaders({'No-Auth':'True'});
    console.log(this.getAdvertisementUrl);
    return this.http.get(this.getAdvertisementUrl);
  }
}