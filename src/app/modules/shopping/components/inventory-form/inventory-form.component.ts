import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoppingApiService } from '../../services/shopping-api.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {

  inventoryForm!:FormGroup

  constructor(private fb:FormBuilder,private api:ShoppingApiService) { }

  ngOnInit(): void {
    this.initiForm()
  }


  initiForm(){
    this.inventoryForm = this.fb.group({
      id:"",
      name:"",
      image:"",
      description:"",
      isAvailable:"",
      category:"",
      manufacturer:"",
      price:"",
    })
  }
}
