import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client:HttpClient) { }

  getAll()
  {
  	
  }
  getOne()
  {
  	let product = new Product(1, 'test1', 15.6);
  	
  	return product;

  }
}
