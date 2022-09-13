import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product :any=[];
  allProduct:any=0;
  totalval:number=0;
 

  constructor(private cartApi:CartapiService) {
  
   }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.product=res;
      this.allProduct=this.cartApi.getTotalAmount();
      

      

    })
  }
 total(item1:any){
    this.totalval= this.cartApi.total(item1)
 
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item);

  }
  removeAllProduct(){
    this.cartApi.removeAllCart();
  }

}
