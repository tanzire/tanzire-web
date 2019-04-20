import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

routerUrl:string;
  constructor(private router:Router) { }

  ngOnInit() {
    // console.log(this.router.url);
    this.routerUrl= this.router.url;
    
  }

}
