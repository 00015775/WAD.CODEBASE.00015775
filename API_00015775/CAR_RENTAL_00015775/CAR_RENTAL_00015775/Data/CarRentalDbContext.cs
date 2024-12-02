using CAR_RENTAL_00015775.Models;
using Microsoft.EntityFrameworkCore;

//------ 00015775 ---------//

namespace CAR_RENTAL_00015775.Data
{
    //------ 00015775 ---------//
    public class CarRentalDbContext : DbContext
    {
        public CarRentalDbContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<Cars_00015775> Cars_00015775 { get; set; }
        public DbSet<Customers_00015775> Customers_00015775 { get; set; }

        //------ 00015775 ---------//
    }
}
//------ 00015775 ---------//
