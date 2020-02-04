import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }
  orderAgainSubmt(){
    this.route.navigateByUrl('/home')
  }

}
