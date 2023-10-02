<p align="center"> <img src="https://img.shields.io/github/stars/christianebs/js-banco-digital-cubos?style=social">
<img src="https://img.shields.io/github/issues-pr-raw/christianebs/js-banco-digital-cubos?style=social">
<img src="https://img.shields.io/github/issues-closed/christianebs/js-banco-digital-cubos?style=social">
</p>

# Banco Digital CUBOS

Este projeto integra o Módulo 2 da **Cubos Academy**. O objetivo é desenvolver uma API para um Banco Digital que atenda às demandas de gerenciamento de contas, transações financeiras e consultas, proporcionando uma experiência eficiente e segura para os usuários.

## :woman_mechanic: Linguagens e Ferramentas

![JavaScript](https://img.shields.io/badge/javascript-0D1117.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0D1117.svg?style=for-the-badge&logo=visual-studio-code&logoColor=0078d7) ![Insomnia](https://img.shields.io/badge/Insomnia-0D1117?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![Git](https://img.shields.io/badge/git-0D1117.svg?style=for-the-badge&logo=git&logoColor=%23F05033) ![GitHub](https://img.shields.io/badge/github-0D1117.svg?style=for-the-badge&logo=github&logoColor=white)

## :paintbrush: Layout

    - Criar Conta

![Banco-Criar](https://github.com/christianebs/js-banco-digital-cubos/assets/108686840/976c312c-06b7-493f-92e2-2dd9e9c03442)

    - Listar Contas

![Banco-Listar](https://github.com/christianebs/js-banco-digital-cubos/assets/108686840/9fc6e1f5-633d-4d79-a3cc-5f86550e0228)

    - Atualizar Conta

![Banco-Atualizar](https://github.com/christianebs/js-banco-digital-cubos/assets/108686840/4c45fcd8-6009-4196-b86f-e49b2550f518)

    - Extrato

![Banco-Extrato](https://github.com/christianebs/js-banco-digital-cubos/assets/108686840/19f6d241-0bd4-4982-9858-2ed8d5fc4a4d)

    - Saldo

![Banco-Saldo](https://github.com/christianebs/js-banco-digital-cubos/assets/108686840/66f78547-0c15-487e-8cad-b0845714d65b)

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

git clone https://github.com/christianebs/js-banco-digital-cubos.git

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

[Licenca MIT License](https://github.com/christianebs/js-banco-digital-cubos/blob/main/LICENSE.txt)

## :woman_technologist: Autora

<a href="https://github.com/christianebs">
<img src="https://user-images.githubusercontent.com/108686840/271874870-1003d6c2-7574-4104-a392-ab6b2713cff2.png" width="100px" />
</a>