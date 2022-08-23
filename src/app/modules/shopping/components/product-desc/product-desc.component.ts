import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  productInformation:any = null;
  constructor(private route: ActivatedRoute) {
    this.productInformation =  this.route?.snapshot?.data['product_desc'];
  }

  ngOnInit(): void {
  }

}
