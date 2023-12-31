import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    debugger;
    this.loadAllProduct();
  }

  loadAllProduct() {
    debugger;
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result.data;
    });
  }
}
