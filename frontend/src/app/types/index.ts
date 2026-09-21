type Usuario = {
  id: string;
  nome: string;
  email: string;
  telefone: number;
  papel: 'cliente' | 'prestador';
};

interface Prestador extends Usuario {
  local: string;
  tipoServico: string;
  sobre: string;
  avaliacaoMedia: number;
}

type Agendamento = {
  id: string;
  clienteId: string;
  prestadorId: string;
  servico: string;
  dataHora: string;
  status:
    'pendente' | 'confirmado' | 'cancelado' | 'concluido' | 'nao_compareceu';
};

type Aviso = {
  id: string;
  titulo: string;
  descricao: string;
  criadoEm: string;
  cor: string;
};

type Mensagem = {
  id: string;
  remetenteId: string;
  texto: string;
  horario: string;
};
