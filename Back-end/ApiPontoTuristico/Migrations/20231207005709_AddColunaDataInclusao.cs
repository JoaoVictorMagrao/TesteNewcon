using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiPontoTuristico.Migrations
{
    public partial class AddColunaDataInclusao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "dataInclusao",
                table: "PontosTuristico",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dataInclusao",
                table: "PontosTuristico");
        }
    }
}
