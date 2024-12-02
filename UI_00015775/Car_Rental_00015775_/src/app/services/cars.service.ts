import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
// --- 00015775 --- //
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
// --- 00015775 --- //
  getAllCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.baseApiUrl + '/api/cars');
  }
// --- 00015775 --- //
  addCar(addCarRequest: Car):Observable<Car>{
    addCarRequest.CarId = 0;
    addCarRequest.CustomerId = 0;
    return this.http.post<Car>(this.baseApiUrl + '/api/cars'
      , addCarRequest);
  }

  getCar(id: string): Observable<Car>{
    return this.http.get<Car>(this.baseApiUrl + '/api/cars/' + id)
  }

  updateCar(id: number, updateCarRequest: Car): Observable<Car>{
    return this.http.put<Car>(this.baseApiUrl + '/api/cars/' + id, updateCarRequest)
  }

  deleteCar(id:number):Observable<Car>{
    return this.http.delete<Car>(this.baseApiUrl + '/api/cars/' + id);
  }
// --- 00015775 --- //
}

