import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit {
  product: any;
  item: any;

  constructor(private api:ApiService,private activateRoute:ActivatedRoute) { 
    this.item = this.activateRoute.snapshot.paramMap.get('item');

    this.api.getsubproduct(this.item).subscribe((response: any) => 
    {
      this.item = this.activateRoute.snapshot.paramMap.get('item')
      this.product = response.data;
      console.log(this.product)
  });
}

  ngOnInit(): void {
  
    
  }
  

}
