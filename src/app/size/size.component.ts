import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
     templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickSize(){
    this.router.navigateByUrl('/milktype')
  }
}
