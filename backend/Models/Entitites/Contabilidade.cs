using System.ComponentModel.DataAnnotations;

namespace Models.Entitites
{
    public class Contabilidade
    {
        public int? Codigo { get; set; }

        [Required(ErrorMessage = "Informe o nome.")]
        public string? Nome { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public DateTime? DataCadastro { get; set; }

        public Contabilidade()
        {
            DataCadastro = DateTime.Now;
        }
    }
}
