import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-milk-balance',
  templateUrl: './milk-balance.component.html',
  styleUrls: ['./milk-balance.component.scss']
})
export class MilkBalanceComponent implements OnInit {
next: boolean = true;  
placeOrder: boolean = false;
  range: number = 0;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  onClickNext(){
    this.next = false   ;
    this.placeOrder = true;
  }
  onClickPlaceOrder(){
    this.route.navigateByUrl('/order')
  }
  sliderChange(event){
    this.range = event;
  }
}
 