import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
routerUrl:string;
  constructor( private router:Router) { }

  ngOnInit() {
    this.routerUrl= this.router.url;
  }

}
