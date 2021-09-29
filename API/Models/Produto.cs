using System;

namespace API.Models
{
    public class Produto
    {
        public Produto() => CriadoEm = DateTime.Now;

        public int Id { get; set; }

        public string Nome { get; set; }
        public string Descrição { get; set; }
        public double Preço { get; set; }
        public string Categoria { get; set; }
        public string Cor { get; set; }

        public DateTime CriadoEm { get; set; }
    }
}