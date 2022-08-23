import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShoppingApiService } from '../../services/shopping-api.service';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss'],
})
export class InventoryFormComponent implements OnInit {
  inventoryForm!: FormGroup;

  productId:string = ''

  constructor(private fb: FormBuilder, private api: ShoppingApiService,private actRoute:ActivatedRoute) {
    this.productId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.initiForm();

    if(this.productId)this.fetchData()

  }

  fetchData(){
    this.api.getSingleProduct(this.productId).pipe(take(1)).subscribe(data=>{
      this.inventoryForm.patchValue({...data})
    })
  }
  addNewProduct(){
    let sanitizeValue = Object.fromEntries(Object.entries(this.inventoryForm.value).filter(i=>{
      if(i[1] === false || i[1] === 0 || i[1]){
        return i;
      }
      return;
    }))

    this.api.addNewProduct(sanitizeValue).pipe(take(1)).subscribe(d=>{
      console.log(d)
    })
  }
  updateProduct(){
    this.api.updateNewProduct(this.inventoryForm.value).pipe(take(1)).subscribe(d=>{
      console.log(d)
    })
  }
  initiForm() {
    this.inventoryForm = this.fb.group({
      id: '',
      name: '',
      image: '',
      description: '',
      isAvailable: '',
      category: '',
      manufacturer: '',
      price: '',
    });
  }
}
