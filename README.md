# app07_SectionList_02

Aplicativo React Native feito com Expo para o desafio de lista de tarefas usando `SectionList`.

## Desafio

Criar um app de tarefas com os componentes:

- `Cabecalho`
- `Conteudo`
- `Rodape`

O app deve permitir:

- digitar uma tarefa e uma data
- adicionar a tarefa na lista ao clicar em `Adicionar`
- agrupar as tarefas por data
- ordenar as datas em ordem crescente
- excluir uma tarefa ao tocar nela, com alerta de confirmacao

## Funcionalidades

- cadastro de tarefas com data no formato `dd/mm/aaaa`
- validacao de data
- agrupamento por secoes usando `SectionList`
- exclusao com `Alert`
- layout separado em componentes

## Estrutura

```text
app07_SectionList_02/
├── App.js
├── components/
│   ├── Cabecalho.js
│   ├── Conteudo.js
│   └── Rodape.js
├── assets/
├── package.json
└── README.md
```

## Tecnologias

- Expo
- React
- React Native

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Para abrir em uma plataforma especifica:

```bash
npm run android
```

```bash
npm run web
```

## Como funciona

1. O usuario digita o nome da tarefa.
2. O usuario informa a data da tarefa.
3. Ao clicar em `Adicionar`, a tarefa entra na lista.
4. As tarefas sao agrupadas pela data em secoes.
5. Ao tocar em uma tarefa, aparece um alerta para confirmar a exclusao.

## Exemplo

- `10/05/2026`
  - tarefa1
  - tarefa2
- `11/05/2026`
  - tarefa3

## Autor

- Vinicius
