import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any;


  constructor(private api: ApiService, private cartApi: CartapiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price })
      });
    })
  }
  addtoCart(item: any) {
    this.cartApi.addToCart(item);
  }
  onbtnclick(item:string){
    return this.router.navigate(['products',item])
      
  }

}
