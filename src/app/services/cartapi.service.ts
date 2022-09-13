import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any=[];
  product:any;
  productList=new BehaviorSubject<any>([]);
  totalSum:number=0;


  constructor(private http:HttpClient) { }

  total(product:any){
    this.cartDataList.map((a:any)=>{
      this.totalSum+=a.price;

    })
    return this.totalSum;

  }

  getProductData(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
 
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }
  getTotalAmount(){
    let grandTotal=0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;

    })
  }
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartDataList.splice(index,1)
      }

    })
    this.productList.next(this.cartDataList)
  }
  removeAllCart(){
    this.cartDataList=[]
    this.productList.next(this.cartDataList)
  }
}
