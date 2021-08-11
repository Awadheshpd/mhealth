import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().subscribe((res: any) => {
      this.products = res['data'];
      console.log('response', res);
    }, err => {
      console.log('ERROR: ', err);
    })
  }

  addProduct(product: any) {
    console.log(product);
  }

}
