namespace Domain.Entities
{
    
    public class PontosEntity : BaseEntity 
    {
        public PontosEntity(Guid id, string nome, string descricao, string tipo_atracao, string estado, string cidade)
        {
            
            this.id = id;
            this.nome = nome;
            this.descricao = descricao;
            this.tipo_atracao = tipo_atracao;
            this.estado = estado;
            this.cidade = cidade;

        }
        
        public Guid id { get; set; }
        public string nome { get; set; }
        public string descricao { get; set; }
        public string tipo_atracao { get; set; }
        public string estado { get; set; }
        public string cidade { get; set; }

    }

}