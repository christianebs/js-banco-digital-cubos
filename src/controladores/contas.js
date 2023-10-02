const bancoDeDados = require("../bancodedados");

let numeroConta = 1;

const listarContas = (req, res) => {
  return res.status(200).json(bancoDeDados.contas);
};

const criarConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  if (!nome || nome === null || nome === " ") {
    return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
  }

  if (!isNaN(nome)) {
    return res.status(400).json({ mensagem: "Digite um nome válido!" });
  }

  if (!cpf || cpf === null || cpf === " ") {
    return res.status(400).json({ mensagem: "O campo CPF é obrigatório." });
  }

  if (isNaN(cpf)) {
    return res
      .status(400)
      .json({ mensagem: "CPF deve conter apenas números." });
  }

  if (!data_nascimento || data_nascimento === null || data_nascimento === " ") {
    return res
      .status(400)
      .json({ mensagem: "O campo data de nascimento é obrigatório." });
  }

  if (!telefone || telefone === null || telefone === " ") {
    return res
      .status(400)
      .json({ mensagem: "O campo telefone é obrigatório." });
  }

  if (isNaN(telefone)) {
    return res
      .status(400)
      .json({ mensagem: "O telefone deve conter apenas números." });
  }

  if (!email || email === null || email === " ") {
    return res.status(400).json({ mensagem: "O campo e-mail é obrigatório." });
  }

  if (!senha || senha === null || senha === " ") {
    return res.status(400).json({ mensagem: "O campo senha é obrigatório." });
  }

  const novaConta = {
    numeroConta: numeroConta,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  };

  numeroConta++;

  bancoDeDados.contas.push(novaConta);

  return res.status(201).send();
};

const atualizarConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const numeroConta = Number(req.params.numeroConta);

  if (!nome || nome === null || nome === " ") {
    return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
  }

  if (!isNaN(nome)) {
    return res.status(400).json({ mensagem: "Digite um nome válido!" });
  }

  if (!cpf || cpf === null || cpf === " ") {
    return res.status(400).json({ mensagem: "O campo CPF é obrigatório." });
  }

  if (isNaN(cpf)) {
    return res
      .status(400)
      .json({ mensagem: "CPF deve conter apenas números." });
  }

  if (!data_nascimento || data_nascimento === null || data_nascimento === " ") {
    return res
      .status(400)
      .json({ mensagem: "O campo data de nascimento é obrigatório." });
  }

  if (!telefone || telefone === null || telefone === " ") {
    return res
      .status(400)
      .json({ mensagem: "O campo telefone é obrigatório." });
  }

  if (isNaN(telefone)) {
    return res
      .status(400)
      .json({ mensagem: "O telefone deve conter apenas números." });
  }

  if (!email || email === null || email === " ") {
    return res.status(400).json({ mensagem: "O campo e-mail é obrigatório." });
  }

  if (!senha || senha === null || senha === " ") {
    return res.status(400).json({ mensagem: "O campo senha é obrigatório." });
  }

  const contaExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroConta
  );

  if (!contaExiste) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }

  contaExiste.usuario.nome = nome;
  contaExiste.usuario.cpf = cpf;
  contaExiste.usuario.data_nascimento = data_nascimento;
  contaExiste.usuario.telefone = telefone;
  contaExiste.usuario.email = email;
  contaExiste.usuario.senha = senha;

  return res.status(204).send();
};

const excluirConta = (req, res) => {
  const numeroConta = Number(req.params.numeroConta);

  const contaExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroConta
  );

  if (!contaExiste) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }

  if (contaExiste.saldo !== 0) {
    return res
      .status(400)
      .json({ mensagem: "A conta só pode ser removida se o saldo for zero." });
  }

  bancoDeDados.contas.splice(bancoDeDados.contas.indexOf(contaExiste), 1);

  return res.status(204).send();
};

const saldo = (req, res) => {
  const numeroConta = Number(req.query.numero_conta);
  const senha = req.query.senha;

  if (!numeroConta) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta é obrigatório!" });
  }

  if (!senha) {
    return res.status(400).json({ mensagem: "A senha é obrigatória!" });
  }

  const contaExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroConta
  );

  if (!contaExiste) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  if (contaExiste.usuario.senha !== senha) {
    return res
      .status(404)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }

  const saldo = contaExiste.saldo;

  return res.status(200).json({ saldo });
};

const extrato = (req, res) => {
  const { numero_conta, senha } = req.query;
  const numeroConta = Number(numero_conta);

  if (!numeroConta) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta é obrigatório!" });
  }

  if (!senha) {
    return res.status(400).json({ mensagem: "A senha é obrigatória!" });
  }

  const contaExiste = bancoDeDados.contas.find(
    (conta) => conta.numeroConta === numeroConta
  );

  if (!contaExiste) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  if (contaExiste.usuario.senha !== senha) {
    return res
      .status(404)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }

  const saques = bancoDeDados.saques.filter(
    (transacao) => transacao.numero_conta === numeroConta
  );
  const depositos = bancoDeDados.depositos.filter(
    (transacao) => transacao.numero_conta === numeroConta
  );
  const transferenciasEnviadas = bancoDeDados.transferencias.filter(
    (transacao) => transacao.numero_conta_origem === numeroConta
  );
  const transferenciasRecebidas = bancoDeDados.transferencias.filter(
    (transacao) => transacao.numero_conta_destino === numeroConta
  );

  return res.status(200).json({
    depositos,
    saques,
    transferenciasEnviadas,
    transferenciasRecebidas,
  });
};

module.exports = {
  listarContas,
  criarConta,
  atualizarConta,
  excluirConta,
  saldo,
  extrato,
};
