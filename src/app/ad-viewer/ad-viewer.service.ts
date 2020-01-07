import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdViewerService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  getAdvertisementUrl: string;
  addCommentsUrl: string;
  getCommentsUrl: string;
  manageFavouriteUrl: string;
  getFavouriteUrl: string;
  reportedAdUrl: string;

  getAdvertisement(id){
    this.getAdvertisementUrl  = this.BaseURI + '/advertistment/GetAdvertisment/'+id;
    //var requestHeader = new HttpHeaders({'No-Auth':'True'});
    console.log(this.getAdvertisementUrl);
    return this.http.get(this.getAdvertisementUrl);
  }

  addComment(comment){
    this.addCommentsUrl  = this.BaseURI + '/advertistment/AddComment';
    return this.http.post(this.addCommentsUrl, comment);
  }

  getComments(adId){
    this.getCommentsUrl  = this.BaseURI + '/advertistment/GetComments/'+adId;
    return this.http.get(this.getCommentsUrl);
  }

  manageFavourite(favouriteAdvertisment){
    this.manageFavouriteUrl = this.BaseURI + '/advertistment/ManageFavouriteAdvertisment';
    return this.http.post(this.manageFavouriteUrl, favouriteAdvertisment);
  }

  getFavourite(userId: string, adId: number){
    this.getFavouriteUrl = this.BaseURI + '/advertistment/IsUserAdvertisment/' +userId +'/' + adId;
    return this.http.get(this.getFavouriteUrl);
  }

  addReportedAdvertisment(reportAdvertismentObj){
    this.reportedAdUrl = this.BaseURI + '/advertistment/AddRepordedAdvertisment';
    return this.http.post(this.reportedAdUrl, reportAdvertismentObj);
  }
}
