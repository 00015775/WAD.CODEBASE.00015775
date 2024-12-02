using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

//------ 00015775 ---------//

namespace CAR_RENTAL_00015775.Models
{
    public class Cars_00015775
    {
        //------ 00015775 ---------//

        [Key]
        public int CarId { get; set; }

        [MaxLength(50)]
        public string Model { get; set; }
      
        public int Year { get; set; }

       
        [Column(TypeName = "decimal(10, 2)")]
        public decimal DailyRate { get; set; }

     
        public DateTime? RentalDate { get; set; }

        public DateTime? ReturnDate { get; set; }

        // Foreign Key
        public int CustomerId { get; set; }

        // Navigation property for the related customer
        public Customers_00015775 Customers_00015775 { get; set; }
    }
}

//------ 00015775 ---------//

//------ 00015775 ---------//