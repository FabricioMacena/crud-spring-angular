# CRUD Spring Angular

Uma aplicação que combina Spring Boot no backend e Angular no frontend, implementando operações CRUD relacionadas a produtos.

## Como utilizar

### Ferramentas recomendadas

- Spring Suite Tool
- Postman
- MySQL Workbench

### Configuração do Banco de Dados MySQL

1. Crie um banco de dados MySQL com o nome `ecommerce_crud` ou outro nome de sua preferência.

2. Configure as credenciais do banco de dados (nome do banco, senha e nome de usuário) em `api/src/main/resources/application.properties`.

```sql
CREATE DATABASE ecommerce_crud;
```

2º - Adicionar Produtos iniciais no endpoint POST de produtos da API através de sua aplicação Api Client
```bash
  POST http://localhost:8080/api/products/
```
```json
  {
    "name": "Fone Bluetooth",
    "amount": 23,
    "price": 60.00,
    "category": "Tecnologia",
    "supplier": "JBL"
  }
```

3º Rodar a API em seu ambiente de desenvolvimento

4º Rodar o frontend Angular no terminal
```bash
  cd ../frontend
```
```
  ng serve
```
