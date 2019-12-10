using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Repositorios;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
         TWMarketplaceContext context = new TWMarketplaceContext();
         ProdutosRepositorio repositorio = new ProdutosRepositorio();

        [HttpGet]

        public async Task<ActionResult<List<Produtos>>> Get ()
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

        /// <summary>
        /// Medoto publico que valida se o nome existe no nosso banco de dados
        /// </summary>
        /// <param name="nome">Busca o objeto pelo nome</param>
        /// <returns>Retorna os objetos cadastrados pelo nome</returns>
        [HttpGet("buscaNome/{nome}")]
        public async Task<ActionResult<List<Produtos>>> Get(string nome)
        {
            List<Produtos> produtosNome = await repositorio.Get(nome.ToLower());
            if ( produtosNome == null)
            {
                return NotFound();
            }
            return produtosNome;
        }

        /// <summary>
        /// Medoto publico que valida se a descrição existe no nosso banco de dados
        /// </summary>
        /// <param name="descricao">Busca o objeto pela descrição</param>
        /// <returns>Retorna os objetos cadastrados pela descrição</returns>
        [HttpGet("busca/{descricao}")]
        public async Task<ActionResult<List<Produtos>>> Descricao(string descricao)
        {
            List<Produtos> produtoDescricao = await repositorio.Descricao(descricao.ToLower());
            if (produtoDescricao == null)
            {
                return NotFound();
            }
                return produtoDescricao;
        }

        /// <summary>
        /// Medoto publico que valida se o preço existe no nosso banco de dados
        /// </summary>
        /// <param name="preco">Busca o objeto pelo preço</param>
        /// <returns>Retorna os objetos cadastrados pelo preço</returns>
        [HttpGet("buscaPreco/{preco}")]
           public async Task<ActionResult<List<Produtos>>> Preco(decimal preco)
        {
            List<Produtos> listaProdutos = await repositorio.Preco(preco);

            return listaProdutos;
        }

        /// <summary>
        /// Metodo do tipo publico que valida se a categoria_produto existe no nosso banco de dados, 
        /// meu Produtos busca informações da minha tabela categoria_produto
        /// </summary>
        /// <param name="categoria_produto">Minha listaProdutos está buscando a minha BuscaporCategoria minha categoria_produto</param>
        /// <returns>Retornar minha listaProdutos</returns>
         [HttpGet("bc/{categoria_produto}")]

           public async Task<List<Produtos>> BuscaporCategoria(string categoria_Produto)
        {
          List<Produtos> listaProdutos = await repositorio.BuscaporCategoria(categoria_Produto.ToLower());

          return listaProdutos;
        }
        }

    }
