import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CustomersService } from '../../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  standalone: false,
  
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit {
// --- 00015775 --- //
  addCustomerRequest: Customer = {

    CustomerId: 0,
    FullName:'',
    Phone: 0,
    Email: ''

  };
// --- 00015775 --- //
  constructor(private customersService: CustomersService, private router: Router){

  }
// --- 00015775 --- //
  ngOnInit(): void {
    
  }

  addCustomer(){
    this.customersService.addCustomer(this.addCustomerRequest)
    .subscribe({
      next:(customer)=>{
        this.router.navigate(['customers']);
      }
    });
  }

}
// --- 00015775 --- //