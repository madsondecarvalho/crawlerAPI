# crawlerAPI

## SOBRE
API REST criada em Nodejs com o objetivo de usar técnicas de web scraping para raspar informações de alguns sites famosos, como o Mercado Livre e o IMDb.

## INSTALAÇÃO

Para instalar a aplicação é necessário que o Nodejs e o npm estejam instalados, com isso em mente, basta na raiz do projeto executar o seguinte comando:

```shell
npm install
```

## EXECUÇÃO

Para executar a API com o node basta usar o comando:

```shell
npm run start
```
Esse comando rodará o script para startar a aplicação. 

## ENDPOINTS

- ```/mercado_livre/search``` (POST)

  Recebe um body na requisiço POST com o seguinte formato:
  
  ```javascript
  {
    "search": "",
    "limit": Int
  }
  ```
  Onde:
  - ```search```: uma String com o dado a ser buscado no site mercado livre.
  - ```limit```: Número inteiro que delimitará o número de itens.
 
  O resultado esperado é um array de objetos, onde cada objeto é um item encontrado no site:
 
   ```javascript
    [
      {
        "name": "",
        "link": "",
        "price": "",
        "store": "",
        "state": ""
      }
    ]
    ```
    Onde:
    - ```name```: Nome do Produto.
    - ```link```: Link do produto no mercado livre.
    - ```price```: Preço do produto
    - ```store```: Loja do produto, pode haver ou não.
    - ```state```: Estado do produto, caso haja. 
    
- ```/imdb/top_rated_movies``` (GET)

  Recebe a lista dos 250 filmes mais bem avaliados no IMDb.

  É possível usar query URL para ordenar os dados da maneira desejada, caso no não envie o a ordenação padro será pelo ranking.
  
  Para ordenar da forma desejada faça a requisiço GET da seguinte forma:
  
  ```/imdb/top_rated_movies?sorted_by=ORDENAÇÃO```
  
  Onde os valores possíveis para ```ORDENAÇÃO``` são:
    - ```rk```: Ordena pelo Ranking
    - ```ir```: Rating no IMDb
    - ```us```: Data de lançamento
    - ```nv```: Número de avaliações


  
