import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../../services/cars.service';
import { Customer } from '../../../models/customer.model';
import { Car } from '../../../models/car.model';
// --- 00015775 --- //
@Component({
  selector: 'app-edit-car',
  standalone: false,
  
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent implements OnInit{
  
  carDetails: Car = {
    CarId: 0,
    Model: '',
    Year: 0,
    DailyRate: 0,
    RentalDate: '',
    ReturnDate: '',
    CustomerId: 0
  };

  constructor(private route: ActivatedRoute, private carsService: CarsService,
    private router: Router
  ){}
// --- 00015775 --- //
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          // call api
          this.carsService.getCar(id).subscribe({
            next: (Response)=>{
              this.carDetails = Response;
            }
          });
        }
      }
    });
    
  }
// --- 00015775 --- //
  updateCar(){
    this.carsService.updateCar(this.carDetails.CarId, this.carDetails)
    .subscribe({
      next:(Response) =>{
        this.router.navigate(['cars']);
      }
    });
  }
// --- 00015775 --- //
  deleteCar(id:number){
    this.carsService.deleteCar(id)
    .subscribe({
      next: (Response)=>{
        this.router.navigate(['cars']);
      }
    })
  }


}
