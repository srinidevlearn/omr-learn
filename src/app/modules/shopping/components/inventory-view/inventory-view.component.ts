import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingApiService } from '../../services/shopping-api.service';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {

  productDataSource:any[] = [];

  constructor(private api:ShoppingApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getAllProducts().pipe().subscribe(d=>{
      this.productDataSource = d;
    })
  }

  navigatetoEdit(product:any){
    this.router.navigate(['shopping','inventory','form',product.id])
  }

  navigatetoAdd(){
    this.router.navigate(['shopping','inventory','form'])
  }
  navigateToProductDesc(product:any){
    this.router.navigate(['shopping','product-detail',product.id])

  }
}
