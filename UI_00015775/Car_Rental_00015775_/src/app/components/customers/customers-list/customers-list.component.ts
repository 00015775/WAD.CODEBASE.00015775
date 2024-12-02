import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../../services/customers.service';
// --- 00015775 --- //
@Component({
  selector: 'app-customers-list',
  standalone: false,
  
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent implements OnInit{

  customers: Customer[] = [
    {
      CustomerId: 1,
      FullName: 'James Cameron',
      Phone: 99889923,
      Email: 'james@gmail.com'
    },

    {
      CustomerId: 2,
      FullName: 'John Doe',
      Phone: 48934343,
      Email: 'doe-john@gmail.com'
    },

    {
      CustomerId: 3,
      FullName: 'Justin Austen',
      Phone: 9823123,
      Email: 'austen@gmail.com'
    }
  ];
// --- 00015775 --- //
  constructor(private customersService: CustomersService){}

  ngOnInit(): void {
    this.customersService.getAllCustomers().subscribe({
      next: (customers) =>{
        this.customers = customers;
      },
      error: (Response) =>{
        console.log(Response);
      }
    });
  }

// --- 00015775 --- //
}

// --- 00015775 --- //