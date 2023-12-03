using Domain.Commands.Contracts;
using Domain.Validation;

namespace Domain.Commands 
{

    public class CreatePontosCommand : ValidatableTypes, ICommand
    {
        public CreatePontosCommand(string nome, string descricao, string tipo_atracao, string estado, string cidade)
        {
            
            this.nome = nome;
            this.descricao = descricao;
            this.tipo_atracao = tipo_atracao;
            this.estado = estado;
            this.cidade = cidade;

        }
        public string nome { get; set; }
        public string descricao { get; set; }
        public string tipo_atracao { get; set; }
        public string estado { get; set; }
        public string cidade { get; set; }


        public bool IsCommandValid()
        {
            ValidateStringNotEmpty(nome, "Nome");
            return this.isValid;
        }
    }
}