using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositorios
{
    public class ProdutosRepositorio : IProdutosRepositorio

    {
        TWMarketplaceContext context = new TWMarketplaceContext();

        public async Task<List<Produtos>> Get()
        {
            return await context.Produtos.Include(c => c.IdCategoriaNavigation).ToListAsync();
        }

        public async Task<List<Produtos>> Get(string nome)
        {
            return await context.Produtos.Where(n => n.Nome.Contains(nome)).ToListAsync();
        }

        public async Task<List<Produtos>> Descricao(string descricao)
        {
            return await context.Produtos.Where(d => d.Descricao.Contains(descricao)).ToListAsync();
        }

        public async Task<List<Produtos>> Preco(decimal preco)
        {
            List<Produtos> listaProdutos = await context.Produtos.Where(pr => pr.Preco <= preco).ToListAsync();

            return listaProdutos;
        }

        public async Task<List<Produtos>> BuscaporCategoria(string categoria_Produto)
        {
            List<Produtos> listaProdutos = await context.Produtos.Include(c => c.IdCategoriaNavigation)
            .Where(prod => prod.IdCategoriaNavigation.CategoriaProduto == categoria_Produto).ToListAsync();

            return listaProdutos;

        }

    }
}

