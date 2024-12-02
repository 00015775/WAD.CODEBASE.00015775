using CAR_RENTAL_00015775.Data;
using CAR_RENTAL_00015775.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


//------ 00015775 ---------//


namespace CAR_RENTAL_00015775.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {

        // Dependency Injection Design Pattern for loos coupling

        private readonly CarRentalDbContext _carRentalDbContext;

        public CustomersController(CarRentalDbContext carRentalDbContext)
        {
            _carRentalDbContext = carRentalDbContext;
        }
        

        // Get All Customer details
        [HttpGet]
        public async Task<IActionResult> GetAllCustomers()
        {
            var customers = await _carRentalDbContext.Customers_00015775.ToListAsync();

            return Ok(customers);
        }
        //------ 00015775 ---------//


        // Add new Customers
        [HttpPost]
        public async Task<IActionResult> AddCustomer( [FromBody] Customers_00015775 customers_00015775)
        {
            
           await _carRentalDbContext.Customers_00015775.AddAsync(customers_00015775);
           await _carRentalDbContext.SaveChangesAsync();
           
           return Ok(customers_00015775);

        }
        //------ 00015775 ---------//



        // Get Customers by ID
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetCustomer([FromRoute] int id)
        {
            var customer = await _carRentalDbContext.Customers_00015775.FirstOrDefaultAsync(x=>x.CustomerId == id);

            if(customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
        //------ 00015775 ---------//

        // Update Customer Details
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateCustomer([FromRoute] int id, Customers_00015775 updateCustomer)
        {
            var customer = await _carRentalDbContext.Customers_00015775.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            customer.FullName = updateCustomer.FullName;
            customer.Phone = updateCustomer.Phone;
            customer.Email = updateCustomer.Email;

            await _carRentalDbContext.SaveChangesAsync();

            return Ok(customer);
        }

        //------ 00015775 ---------//
        // Delete Customer details

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteCustomer([FromRoute] int id)
        {
            var customer = await _carRentalDbContext.Customers_00015775.FindAsync(id);

            if( customer == null)
            {
                return NotFound();
            }

            _carRentalDbContext.Customers_00015775.Remove(customer);

            await _carRentalDbContext.SaveChangesAsync();

            return Ok(customer);
        }


    }
}
//------ 00015775 ---------//