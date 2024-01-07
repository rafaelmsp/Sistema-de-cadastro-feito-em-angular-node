import { OnInit } from '@angular/core';
import { ProductService } from './../../../componentes/product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'] 
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.productService.showOnConsole('teste...');
  }

}
