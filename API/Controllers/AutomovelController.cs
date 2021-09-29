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
    [Route("api/automovel")]

    public class AutomovelController : ControllerBase
    {
        private readonly DataContext _context;

        public AutomovelController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Create")]

        public async Task<IActionResult> Create(Automovel automovel)
        {
            await _context.Automoveis.AddAsync(automovel);
            _context.SaveChanges();
            return Created("", automovel);
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List() => Ok(await _context.Automoveis.ToListAsync());
    }
}