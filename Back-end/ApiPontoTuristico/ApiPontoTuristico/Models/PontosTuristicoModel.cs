namespace ApiPontoTuristico.Models
{
    public class PontosTuristicoModel
    {
        public int Id { get; set; }

        public string? Nome { get; set; }

        public string? Descricao { get; set; }

        public string? Endereco { get; set; }

        public string? Estado { get; set; }

        public string? Cidade { get; set; }

        public DateTime? dataInclusao { get; set; }
     
    }
}
