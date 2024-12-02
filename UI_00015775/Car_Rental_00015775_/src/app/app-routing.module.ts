import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { EditCarComponent } from './components/cars/edit-car/edit-car.component';
// --- 00015775 --- //
const routes: Routes = [
  {
    path:'',
    component: CustomersListComponent
  },

  {
    path:'customers',
    component: CustomersListComponent
  },
// --- 00015775 --- //
  {
    path:'cars',
    component: CarsListComponent
  },
  

  {
    path:'customers/add',
    component: AddCustomerComponent
  }
  ,
  {
    path:'cars/add',
    component: AddCarComponent
  }
  ,
  {
    path:'customers/edit/:id',
    component: EditCustomerComponent
  }
  ,
  {
    path:'cars/edit/:id',
    component: EditCarComponent
  }
];
// --- 00015775 --- //
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// --- 00015775 --- //