using System.ComponentModel.DataAnnotations;

namespace Models.Entitites
{
    public class Contato
    {
        public int? Codigo { get; set; }

        [Required(ErrorMessage = "Informe o nome do contato.")]
        [MinLength(2, ErrorMessage = "Informe um nome válido")]
        public string? Nome { get; set; }

        [Required(ErrorMessage = "Digite o e-mail do contato.")]
        [EmailAddress(ErrorMessage = "O e-mail informado não é válido!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Digite o telefone do contato.")]
        [Phone(ErrorMessage = "O telefone informado não é válido!")]
        public string? Telefone { get; set; }

        [Required(ErrorMessage = "Informe o status do contato.")]
        public bool Status { get; set; }
        public DateTime? DataCadastro { get; set; }

        [Required(ErrorMessage = "Informar o Cliente do contato")]
        public int ClienteId { get; set; }
        public virtual Cliente? Cliente { get; set; }

        public Contato()
        {
            DataCadastro = DateTime.Now;
        }
    }
}
