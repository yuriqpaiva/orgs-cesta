import logo from '../../assets/logo.png';

// Mocks são dados fictícios e fixos para podermos trabalhar com uma simulação de dados

const cesta = {
  topo: {
    titulo: 'Detalhe da Cesta',
  },
  detalhes: {
    nome: 'Cesta de Verduras',
    logoFazenda: logo,
    fazenda: 'Jenny Jack Farm',
    descricao:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    preco: 'RS 40,00',
    botao: 'Comprar',
  },
  // itens: {
  //   titulo: 'Itens da cesta',
  //   lista: [
  //     {
  //       nome: 'Tomate',
  //       imagem: tomate,
  //     },
  //     {
  //       nome: 'Brócolis',
  //       imagem: brocolis,
  //     },
  //     {
  //       nome: 'Batata',
  //       imagem: batata,
  //     },
  //     {
  //       nome: 'Pepino',
  //       imagem: pepino,
  //     },
  //     {
  //       nome: 'Abóbora',
  //       imagem: abobora,
  //     },
  //   ],
  // },
};

export default cesta;
