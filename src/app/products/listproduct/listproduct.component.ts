import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
	private products:Array<Product> = [];

  constructor(private productService:ProductService) {
  	this.products.push(this.productService.getOne());
   }

  ngOnInit() {
  	console.log(this.products);
  }

}
