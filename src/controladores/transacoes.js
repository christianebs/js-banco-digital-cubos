const bancoDeDados = require("../bancodedados");

function formatarData() {
  const dataAtual = new Date();
  const horarioAtual = dataAtual.toLocaleTimeString();

  const dataFormatada = `${
    dataAtual.toISOString().split("T")[0]
  } ${horarioAtual}`;

  return dataFormatada;
}

const depositar = (req, res) => {
  const { numero_conta, valor } = req.body;

  if (!numero_conta) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta é obrigatório!" });
  }

  if (valor <= 0) {
    return res.status(404).json({ mensagem: "Valor inválido!" });
  }

  if (!valor) {
    return res.status(404).json({ mensagem: "O campo valor é obrigatório!" });
  }

  const numeroConta = Number(numero_conta);
  const valorDeposito = parseFloat(valor);

  const contaExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroConta
  );

  if (!contaExiste) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }

  if (valorDeposito <= 0) {
    return res
      .status(404)
      .json({ mensagem: "O valor do depósito precisa ser maior que zero" });
  }

  contaExiste.saldo += valorDeposito;

  const registroDeposito = {
    data: formatarData(),
    numero_conta: numeroConta,
    valor: valorDeposito,
  };

  bancoDeDados.depositos.push(registroDeposito);

  return res.status(204).send();
};

const sacar = (req, res) => {
  const { numero_conta, valor, senha } = req.body;

  if (!numero_conta) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta é obrigatório!" });
  }

  if (valor <= 0) {
    return res.status(404).json({ mensagem: "Valor inválido!" });
  }

  if (!valor) {
    return res.status(400).json({ mensagem: "O campo valor é obrigatório!" });
  }

  if (!senha) {
    return res.status(400).json({ mensagem: "A senha é obrigatória!" });
  }

  const numeroConta = Number(numero_conta);
  const valorSaque = parseFloat(valor);

  const contaExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroConta
  );

  if (!contaExiste) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }

  if (contaExiste.usuario.senha !== senha) {
    return res
      .status(404)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }

  if (contaExiste.saldo < valorSaque) {
    return res.status(404).json({ mensagem: "Saldo insuficiente!" });
  }

  contaExiste.saldo -= valorSaque;

  const registroSaque = {
    data: formatarData(),
    numero_conta: numeroConta,
    valor: valorSaque,
  };

  bancoDeDados.saques.push(registroSaque);

  return res.status(204).send();
};

const transferir = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  if (!numero_conta_origem) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta de origem é obrigatório!" });
  }

  if (!numero_conta_destino) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta de destino é obrigatório!" });
  }

  if (valor <= 0) {
    return res.status(404).json({ mensagem: "Valor inválido!" });
  }

  if (!valor) {
    return res.status(400).json({ mensagem: "O campo valor é obrigatório!" });
  }

  if (!senha) {
    return res.status(400).json({ mensagem: "A senha é obrigatória" });
  }

  const numeroContaOrigem = Number(numero_conta_origem);
  const numeroContaDestino = Number(numero_conta_destino);
  const valorTransferencia = parseFloat(valor);

  const contaOrigemExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroContaOrigem
  );

  if (!contaOrigemExiste) {
    return res
      .status(404)
      .json({ mensagem: "Conta de origem não encontrada." });
  }

  if (contaOrigemExiste.saldo === 0) {
    return res.status(404).json({ mensagem: "Saldo insuficiente!" });
  }

  if (contaOrigemExiste.usuario.senha !== senha) {
    return res
      .status(404)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }

  const contaDestinoExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroContaDestino
  );

  if (!contaDestinoExiste) {
    return res
      .status(404)
      .json({ mensagem: "Conta de destino não encontrada." });
  }

  if (contaOrigemExiste.saldo < valorTransferencia) {
    return res.status(404).json({ mensagem: "Saldo insuficiente!" });
  }

  contaOrigemExiste.saldo -= valorTransferencia;
  contaDestinoExiste.saldo += valorTransferencia;

  const registroTranferencia = {
    data: formatarData(),
    numero_conta_origem: numeroContaOrigem,
    numero_conta_destino: numeroContaDestino,
    valor: valorTransferencia,
  };

  bancoDeDados.transferencias.push(registroTranferencia);

  return res.status(204).send();
};

module.exports = {
  depositar,
  sacar,
  transferir,
};
