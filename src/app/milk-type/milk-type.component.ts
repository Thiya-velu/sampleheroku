import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-milk-type',
  templateUrl: './milk-type.component.html',
  styleUrls: ['./milk-type.component.scss']
})
export class MilkTypeComponent implements OnInit {
milkType: any = []; 
  constructor(private route: Router) { }

  ngOnInit() {
    this.milkType = [
      {id:1, label:'Cow'},
      {id:2, label:'Soy'},
      {id:3, label:'Rice'},
      {id:4, label:'Coconut'},
    ]
  }
  getColor(label){
    switch (label) {
      case 'Cow':
        return '#BBDEFB';
      case 'Soy':
        return '#81D4FA';
      case 'Rice':
        return '#BBDEFB';
        case 'Coconut':
        return '#81D4FA';
    }
  }
  milkBalance(){
    this.route.navigateByUrl('/milkBalance')
  }
}
