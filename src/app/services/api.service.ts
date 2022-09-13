import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private base_usl ="https://fakestoreapi.com/products"

  getProduct(){
    return this.http.get('https://fakestoreapi.com/products').pipe(map((res:any)=>{
      return res;
    }))
  }
  getsubproduct(item:string){
    return this.http.get(`${this.base_usl}/category/${item}`)
  }
}
