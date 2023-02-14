using System.ComponentModel.DataAnnotations;

namespace Models.Entitites
{
    public class Cliente
    {
        public int? Codigo { get; set; }

        [Required(ErrorMessage = "Informe o nome do contato.")]
        [MinLength(2, ErrorMessage = "Informe um nome válido")]
        public string? Nome { get; set; }
        public bool Status { get; set; }
        public virtual IList<Contato>? Contatos { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime? DataCadastro { get; set; }

        public Cliente()
        {
            Contatos = new List<Contato>();
            Status = true;
            DataCadastro = DateTime.Now;
        }
    }


}
