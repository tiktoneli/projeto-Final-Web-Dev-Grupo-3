import { api } from "../../api/api"

const Listagem = () => {
  const [produtos, setProdutos] = useState([]); 
  const [filtroNome, setFiltroNome] = useState(""); 
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await getProdutos();
        setProdutos(response);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos();
  }, []);

  useEffect(() => {
    const produtosFiltrados = produtos.filter((produto) => {
      return (
        produto.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
        produto.estoque > 0
      );
    });

    setProdutosFiltrados(produtosFiltrados);
  }, [produtos, filtroNome]);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filtroNome}
        onChange={(e) => setFiltroNome(e.target.valor)}
      />
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listagem;