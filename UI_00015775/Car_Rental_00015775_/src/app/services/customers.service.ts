import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
// --- 00015775 --- //
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
// --- 00015775 --- //

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseApiUrl + '/api/customers');
  }
  
// --- 00015775 --- //
  addCustomer(addCustomerRequest: Customer): Observable<Customer> {
    addCustomerRequest.CustomerId = 0;
    return this.http.post<Customer>(this.baseApiUrl + '/api/customers'
      , addCustomerRequest);
  }

  getCustomer(id: string): Observable<Customer>{
    return this.http.get<Customer>(this.baseApiUrl + '/api/customers/' + id)
  }

  updateCustomer(id: number, updateCustomerRequest: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.baseApiUrl + '/api/customers/' + id, updateCustomerRequest)
  }

  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(this.baseApiUrl + '/api/customers/' + id);
  }
// --- 00015775 --- //
}
