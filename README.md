# Crud Pontos Turísticos

# Sobre o projeto

Este projeto foi concebido como um desafio de avaliação de conhecimento, inspirado em experiências anteriores.

*Recursos Principais:*
- *CRUD Completo:* Foi desenvolvido um sistema de CRUD para gerenciar pontos turísticos.
- *Listagem Dinâmica:* Na página principal, você encontrará uma tabela detalhada que lista todos os pontos turísticos cadastrados.
- *Ações Intuitivas:* Para maior praticidade, na tabela de listagem tem as opções de edição e exclusão.
- *Filtros:* Contem dois filtros, um de nome e o outro de descrição, permitindo uma localização rápida dos pontos turísticos desejados.
- *Paginação:* Paginação integrada à tabela.


# Tecnologias utilizadas
## Back end
- C#
- Asp.net
- Banco de dados: Microsoft SQL Server
## Front end
- HTML / CSS / JS 
- ReactJS
- Tailwind
- Material UI


# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/JoaoVictorMagrao/newcon-crud
```

## Back end
Pré-requisitos: .NET 6.0

```bash

# Entrar na pasta do projeto back-end
  cd back-end
  cd ApiPontoTuristico

 # Entrar no appSettings, preencher as campos com as configurações do seu banco de dados.
Exemplo:  "DataBase": "Server=./;DataBase=DB_PontosTuristico;User Id=sa;Password=123456"

 # Em seguida roda as migrations para criação da tabela
  dotnet ef database update
# Comando para compilar o projeto 
  dotnet run
```


## Front end web
Pré-requisitos: yarn

```bash
# Entrar na pasta do projeto back-end
  cd front-end

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

João Victor Magrão
