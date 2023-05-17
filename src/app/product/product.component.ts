import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  formGroupProduct: FormGroup;

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      amount: [''],
      validity: [''],
      price: ['']
    });
  }
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProduct().subscribe(
      {
        next: data => this.product = data
      }
    );
  }
}