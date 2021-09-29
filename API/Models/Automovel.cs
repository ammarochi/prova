using System;

namespace API.Models
{
    public class Automovel
    {
        public Automovel() => CriadoEm = DateTime.Now;

        public int Id { get; set; }

        public string Modelo { get; set; }
        public string Placa { get; set; }
        public string Proprietario { get; set; }
        public string Cor { get; set; }
        public string Cpfproprietario { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}