using System.ComponentModel.DataAnnotations;

namespace CAR_RENTAL_00015775.Models
{
    public class Customers_00015775
    {
        //------ 00015775 ---------//

        [Key]
        public int CustomerId { get; set; }

        [MaxLength(100)]
        public string FullName { get; set; }

       
        public string Phone { get; set; }

        
        public string Email { get; set; }

        //------ 00015775 ---------//

        
    }
}

