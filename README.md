# Banco Digital CUBOS

Este projeto integra o Módulo 2 da **Cubos Academy**. O objetivo é desenvolver uma API para um Banco Digital que atenda às demandas de gerenciamento de contas, transações financeiras e consultas, proporcionando uma experiência eficiente e segura para os usuários.

## :woman_mechanic: Linguagens e Ferramentas

![JavaScript](https://img.shields.io/badge/javascript-0D1117.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0D1117.svg?style=for-the-badge&logo=visual-studio-code&logoColor=0078d7) ![Insomnia](https://img.shields.io/badge/Insomnia-0D1117?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![Git](https://img.shields.io/badge/git-0D1117.svg?style=for-the-badge&logo=git&logoColor=%23F05033) ![GitHub](https://img.shields.io/badge/github-0D1117.svg?style=for-the-badge&logo=github&logoColor=white)

## :triangular_flag_on_post: Contribua com o projeto

- Realize o Fork
- Faça as modificações necessárias
- Realize a Pull Request (PR)

## :card_file_box: Fucionalidades do Projeto

- [x] Gerenciamento de Contas
    - Criar conta bancária
    - Listar contas bancárias
    - Atualizar dados do usuário da conta bancária
    - Excluir uma conta bancária
- [x] Transações Financeiras
    - Depositar em uma conta bancária
    - Sacar de uma conta bancária
    - Transferir valores entre contas bancárias
- [x] Consulta de Informações
    - Consultar saldo da conta bancária
    - Emitir extrato bancário

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto

git clone https://github.com/christianebs//js-banco-digital-cubos.git

# 2. Inicialize um novo projeto Node.js

npm install -y

# 3. Instale o framework web Express como uma dependência

npm install express

# 4. Instale o nodemon como uma dependência de desenvolvimento

npm install -D nodemon

# 5. Execute o servidor com nodemon para reinicialização automática

npm run dev
```

Observações:

- Abra o arquivo ```package.json``` e ajuste a seção de scripts da seguinte maneira:

```shell 
"scripts": {
    "dev": "nodemon ./src/index.js"
},
```
Essa configuração permite iniciar o servidor em modo de desenvolvimento usando o nodemon.
- Para encerrar todos os serviços, utilize o atalho padrão do terminal pressionando **CTRL+C**. Esse comando interrompe a execução dos processos, encerrando o servidor e liberando o terminal.

## :arrows_counterclockwise: Endpoints

- GET /contas?senha_banco=Cubos123Bank - Listar contas bancárias
- POST /contas - Criar conta bancária
- PUT /contas/:numeroConta/usuario - Atualizar dados da conta bancária
- DELETE /contas/:numeroConta - Excluir Conta
- POST /transacoes/depositar - Depositar
- POST /transacoes/sacar - Sacar
- POST /transacoes/transferir - Transferir
- GET /contas/saldo?numero_conta=1&senha=123 - Saldo
- GET /contas/extrato?numero_conta=1&senha=123 - Extrato

## :memo: Collections

- [Insomnia](https://github.com/christianebs/js-banco-digital-cubos/blob/main/Insomnia_collections.json)

## :scroll: Licença do Projeto

[Licenca MIT License](http://creativecommons.org/licenses/by)

## :woman_technologist: Autora

<a href="https://github.com/christianebs">
<img src="https://avatars.githubusercontent.com/u/108686840?v=4" width="100px" />
</a>