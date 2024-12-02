using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

//------ 00015775 ---------//

namespace CAR_RENTAL_00015775.Migrations
{
    public partial class CarRental_00015775 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //------ 00015775 ---------//
            migrationBuilder.CreateTable(
                name: "Customers_00015775",
                columns: table => new
                {
                    CustomerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers_00015775", x => x.CustomerId);
                });
            //------ 00015775 ---------//
            migrationBuilder.CreateTable(
                name: "Cars_00015775",
                columns: table => new
                {
                    CarId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Model = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    DailyRate = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    RentalDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReturnDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    Customers_00015775CustomerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars_00015775", x => x.CarId);
                    table.ForeignKey(
                        name: "FK_Cars_00015775_Customers_00015775_Customers_00015775CustomerId",
                        column: x => x.Customers_00015775CustomerId,
                        principalTable: "Customers_00015775",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_00015775_Customers_00015775CustomerId",
                table: "Cars_00015775",
                column: "Customers_00015775CustomerId");
        }
        //------ 00015775 ---------//
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars_00015775");

            migrationBuilder.DropTable(
                name: "Customers_00015775");
        }
    }
}
//------ 00015775 ---------//

//------ 00015775 ---------//