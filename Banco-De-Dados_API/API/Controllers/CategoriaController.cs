using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;
using API.Repositorios;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        CategoriaRepositorio repositorio = new CategoriaRepositorio();

        [HttpGet]
        public async Task<ActionResult<List<Categoria>>> Get ()
        {
                try
           {
               return await repositorio.Get();
           }
           catch (System.Exception)
           {  
               throw;
           }
        }

        [HttpGet("{categoria_produto}")]

        /// <summary>
        /// Metodo usado para puxar apenas as categoria_produto que existe no banco de dados
        /// </summary>
        /// <param name="categoria_produto">Objeto do tipo categoria_produto</param>
        /// <returns>Objeto do tipo categoria_produto</returns>
        public async Task<ActionResult<Categoria>> Get(string categoria_produto)/*Puxa apenas pelo categoria_produto */
        {
            var categoria = repositorio.Get(categoria_produto.ToLower());/*Variavel categorias recebe do banco de dados minha categoria por categoria_produto */

            if (categoria == null)
            {/*Se minha categorias for nulo ele da erro. Caso contrario ele retorna por categoria_produto */
                return NotFound();
            }
            return await categoria;
        }

       
    }
}