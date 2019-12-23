import { Component, OnInit } from '@angular/core';
import { CreateAdService } from './create-ad.service';
import { CreateadModel } from './createad-model';

@Component({
  selector: 'app-createad',
  templateUrl: './createad.component.html',
  styleUrls: ['./createad.component.css']
})
export class CreateadComponent implements OnInit {

  constructor(private createadService: CreateAdService) { }

  categoryData: any;
  brandData: any;

  CreateadModel: CreateadModel = new CreateadModel();

  ngOnInit() {
    this.getCategories();
    this.getBrands();
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

}
