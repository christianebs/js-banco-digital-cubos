const { contas } = require("../bancodedados");

const validarEmail = (req, res, next) => {
  const { email } = req.body;

  const emailExiste = contas.some((conta) => conta.usuario.email === email);

  if (emailExiste) {
    return res
      .status(400)
      .json({ mensagem: "Já existe uma conta com o e-mail informado!" });
  }

  next();
};

module.exports = validarEmail;
