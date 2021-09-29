using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/produto")]

    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;

        public ProdutoController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Create")]

        public async Task<IActionResult> Create(Produto produto)
        {
            await _context.Produtos.AddAsync(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List() => Ok(await _context.Produtos.ToListAsync());
    }
}