import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SizeComponent } from './size/size.component';
import { MilkTypeComponent } from './milk-type/milk-type.component';
import { MilkBalanceComponent } from './milk-balance/milk-balance.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    SizeComponent,
    MilkTypeComponent,
    MilkBalanceComponent,
    OrderCompleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  
  {path:" ", component:WelcomepageComponent},   
  {path:"home", component:WelcomepageComponent},
  {path:"size", component:SizeComponent} ,
  {path:"milktype", component:MilkTypeComponent},
  {path:"milkBalance", component:MilkBalanceComponent},
  {path:"order",component:OrderCompleteComponent} 
     ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
