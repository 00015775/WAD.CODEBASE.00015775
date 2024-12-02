import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-edit-customer',
  standalone: false,
  
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit {

  customerDetails: Customer = {
    CustomerId: 0,
    FullName:'',
    Phone: 0,
    Email: ''
  };

// --- 00015775 --- //
  constructor(private route: ActivatedRoute, private customersService: CustomersService,
    private router:Router
  ){}
// --- 00015775 --- //
  ngOnInit(): void {
    this.route.paramMap.subscribe({
        next: (params) =>{
            const id = params.get('id');

            if(id){
              //call api
              this.customersService.getCustomer(id).subscribe({
                  next: (Response)=>{
                    this.customerDetails = Response;
                  }
              });
            }
        }
    });
  }
// --- 00015775 --- //

  updateCustomer(){
    this.customersService.updateCustomer(this.customerDetails.CustomerId, this.customerDetails)
    .subscribe({
      next: (Response)=>{
        this.router.navigate(['customers']);
      }
    });
  }
// --- 00015775 --- //
  deleteCustomer(id: number){
    this.customersService.deleteCustomer(id)
    .subscribe({
      next:(Response)=>{
        this.router.navigate(['customers']);
      }
    });
  }

// --- 00015775 --- //
}
