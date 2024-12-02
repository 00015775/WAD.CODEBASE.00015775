import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { EditCarComponent } from './components/cars/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CarsListComponent,
    AddCustomerComponent,
    AddCarComponent,
    EditCustomerComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// --- 00015775 --- //