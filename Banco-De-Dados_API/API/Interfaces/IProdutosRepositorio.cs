using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface IProdutosRepositorio
    {
        Task<List<Produtos>> Get();
        Task<List<Produtos>> Get(string nome);
        Task<List<Produtos>> Descricao(string descricao);
        Task<List<Produtos>> Preco(decimal preco);
        Task<List<Produtos>> BuscaporCategoria(string categoria_Produto);

    }
}