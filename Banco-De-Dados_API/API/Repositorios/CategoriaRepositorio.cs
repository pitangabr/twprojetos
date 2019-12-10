using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositorios
{
    public class CategoriaRepositorio : ICategoriaRepositorio
    {
        TWMarketplaceContext context = new TWMarketplaceContext();

        public async Task<List<Categoria>> Get()
        {
            return await context.Categoria.ToListAsync();
        }

        public async Task<Categoria> Get(string categoria_produto)
        {
            Categoria retorno = await context.Categoria.Where(c => c.CategoriaProduto == categoria_produto).FirstOrDefaultAsync();
            return  retorno;
        }
    }
}