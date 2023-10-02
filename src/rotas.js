const express = require("express");
const validarSenha = require("./intermediarios/validarSenha");
const validarCpf = require("./intermediarios/validarCpf");
const validarEmail = require("./intermediarios/validarEmail");
const {
  listarContas,
  criarConta,
  atualizarConta,
  excluirConta,
  saldo,
  extrato,
} = require("./controladores/contas");
const { depositar, sacar, transferir } = require("./controladores/transacoes");

const rotas = express();

rotas.get("/contas", validarSenha, listarContas);
rotas.post("/contas", validarCpf, validarEmail, criarConta);
rotas.put(
  "/contas/:numeroConta/usuario",
  validarCpf,
  validarEmail,
  atualizarConta
);
rotas.delete("/contas/:numeroConta", excluirConta);
rotas.post("/transacoes/depositar", depositar);
rotas.post("/transacoes/sacar", sacar);
rotas.post("/transacoes/transferir", transferir);
rotas.get("/contas/saldo", saldo);
rotas.get("/contas/extrato", extrato);

module.exports = rotas;
