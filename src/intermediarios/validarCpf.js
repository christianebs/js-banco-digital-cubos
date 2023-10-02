const { contas } = require("../bancodedados");

const validarCpf = (req, res, next) => {
  const { cpf } = req.body;

  const cpfExiste = contas.some((conta) => conta.usuario.cpf === cpf);

  if (cpfExiste) {
    return res
      .status(400)
      .json({ mensagem: "Já existe uma conta com o CPF informado!" });
  }

  next();
};

module.exports = validarCpf;
