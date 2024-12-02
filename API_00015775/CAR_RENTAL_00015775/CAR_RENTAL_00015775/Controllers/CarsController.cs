using CAR_RENTAL_00015775.Data;
using CAR_RENTAL_00015775.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace CAR_RENTAL_00015775.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {

        // With Dependency Injection

        private readonly CarRentalDbContext _carRentalDbContext;

        public CarsController(CarRentalDbContext carRentalDbContext)
        {
            _carRentalDbContext = carRentalDbContext;
        }



        // Get All Car details
        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var cars = await _carRentalDbContext.Cars_00015775
                .Include(c => c.Customers_00015775) 
                .ToListAsync();

            return Ok(cars);
        }

        //------ 00015775 ---------//
        // Add new Cars
        [HttpPost]
        public async Task<IActionResult> AddCars([FromBody] Cars_00015775 cars_00015775)
        {
      
            if (cars_00015775.CustomerId == 0 && cars_00015775.Customers_00015775 != null)
            {
                
                var newCustomer = new Customers_00015775
                {
                    FullName = cars_00015775.Customers_00015775.FullName,
                    Phone = cars_00015775.Customers_00015775.Phone,
                    Email = cars_00015775.Customers_00015775.Email
                };

          
                _carRentalDbContext.Customers_00015775.Add(newCustomer);
                await _carRentalDbContext.SaveChangesAsync();

                cars_00015775.CustomerId = newCustomer.CustomerId; 
            }
            else
            {
                
                var existingCustomer = await _carRentalDbContext.Customers_00015775
                    .FirstOrDefaultAsync(c => c.CustomerId == cars_00015775.CustomerId);

                if (existingCustomer == null)
                {
                    return NotFound(new { message = "Customer not found." });
                }
            }

            _carRentalDbContext.Cars_00015775.Add(cars_00015775);
            await _carRentalDbContext.SaveChangesAsync();

            
            return Ok(cars_00015775);
        }
        //------ 00015775 ---------//

        // Get Cars by ID
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetCar([FromRoute] int id)
        {
            var car = await _carRentalDbContext.Cars_00015775.FirstOrDefaultAsync(x => x.CarId == id);

            if (car == null)
            {
                return NotFound();
            }
            return Ok(car);
        }

        //------ 00015775 ---------//
        // Update Customer Details       
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateCar([FromRoute] int id, Cars_00015775 updateCar)
        {
            var car = await _carRentalDbContext.Cars_00015775
                                               .Include(c => c.Customers_00015775) 
                                               .FirstOrDefaultAsync(c => c.CarId == id);

            if (car == null)
            {
                return NotFound();
            }

            car.Model = updateCar.Model;
            car.Year = updateCar.Year;
            car.DailyRate = updateCar.DailyRate;
            car.RentalDate = updateCar.RentalDate;
            car.ReturnDate = updateCar.ReturnDate;

            
            if (updateCar.Customers_00015775 != null)
            {
              
                if (updateCar.CustomerId == 0)
                {
                    
                    var newCustomer = new Customers_00015775
                    {
                        FullName = updateCar.Customers_00015775.FullName,
                        Phone = updateCar.Customers_00015775.Phone,
                        Email = updateCar.Customers_00015775.Email
                    };

                    
                    _carRentalDbContext.Customers_00015775.Add(newCustomer);
                    await _carRentalDbContext.SaveChangesAsync();

                    car.CustomerId = newCustomer.CustomerId;
                    car.Customers_00015775 = newCustomer; 
                }
                else
                {
                    
                    var existingCustomer = await _carRentalDbContext.Customers_00015775
                                                                    .FirstOrDefaultAsync(c => c.CustomerId == updateCar.CustomerId);

                    if (existingCustomer == null)
                    {
                        return NotFound(new { message = "Customer not found." });
                    }

                    existingCustomer.FullName = updateCar.Customers_00015775.FullName;
                    existingCustomer.Phone = updateCar.Customers_00015775.Phone;
                    existingCustomer.Email = updateCar.Customers_00015775.Email;

      
                    car.Customers_00015775 = existingCustomer;
                }
            }

            await _carRentalDbContext.SaveChangesAsync();
            return Ok(car);
        }

        //------ 00015775 ---------//
        // Delete Customer details

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteCar([FromRoute] int id)
        {
            var car = await _carRentalDbContext.Cars_00015775.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            _carRentalDbContext.Cars_00015775.Remove(car);

            await _carRentalDbContext.SaveChangesAsync();

            return Ok(car);
        }

        //------ 00015775 ---------//

    }
}
//------ 00015775 ---------//