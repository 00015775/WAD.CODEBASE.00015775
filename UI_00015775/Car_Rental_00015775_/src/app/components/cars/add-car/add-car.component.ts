import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { CarsService } from '../../../services/cars.service';
import { Router, RouterEvent } from '@angular/router';
// --- 00015775 --- //
@Component({
  selector: 'app-add-car',
  standalone: false,
  
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent implements OnInit{
  // --- 00015775 --- //
  addCarRequest: Car = {
    CarId: 0,
    Model: '',
    Year: 0,
    DailyRate: 0,
    RentalDate: '',
    ReturnDate: '',
    CustomerId: 0
  };
  // --- 00015775 --- //

  constructor(private carsService: CarsService, private router: Router){}

  ngOnInit(): void {
    
  }

  addCar(){
    this.carsService.addCar(this.addCarRequest)
    .subscribe({
      next: (car)=>{
        this.router.navigate(['cars']);
      }
    });
  }

}
// --- 00015775 --- //