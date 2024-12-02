import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../../services/cars.service';
// --- 00015775 --- //
@Component({
  selector: 'app-cars-list',
  standalone: false,
  
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent implements OnInit{

  cars: Car[] = [
    {
      CarId: 1,
      Model: 'Honda',
      Year: 2024,
      DailyRate: 35,
      RentalDate: '2024-12-24',
      ReturnDate: '2024-12-25',
      CustomerId: 1
    },
    {
      CarId: 2,
      Model: 'BMV',
      Year: 2025,
      DailyRate: 60,
      RentalDate: '2024-11-13',
      ReturnDate: '2024-11-15',
      CustomerId: 2
    },
    {
      CarId: 3,
      Model: 'G-Vagon',
      Year: 2025,
      DailyRate: 90,
      RentalDate: '2024-11-17',
      ReturnDate: '2024-11-24',
      CustomerId: 3
    }

  ];

  constructor(private carsService: CarsService){}

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe({
      next: (cars)=>{
        this.cars = cars;
      },
      error:(Response)=>{
        console.log(Response);
      }
    })
  }

}
// --- 00015775 --- //