import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  adDetails: any;
  filteredAdDetails: any;

  ngOnInit() {
    this.getAllAdvertisements();
  }

  getAllAdvertisements(){
    this.profileService.getAdvertisementByUser('12345')
      .subscribe((data: any) => {
        var xx =data;
        this.adDetails = data;
        this.filteredAdDetails = this.adDetails;
        console.log(this.filteredAdDetails.length);
      })
  }



}
