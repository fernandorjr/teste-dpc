using System.ComponentModel.DataAnnotations;

namespace Models.Entitites
{
    public class Sistema
    {
        public int Codigo { get; set; }

        [Required(ErrorMessage = "Informe o nome do sistema.")]
        [MinLength(2, ErrorMessage = "Informe um nome válido")]
        public string? Nome { get; set; }
    }
}
