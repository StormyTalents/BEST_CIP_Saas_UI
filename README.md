# designious 

To run everything:
```bash
docker-compose up 
```

To run only services:
```bash
docker-compose --profile services up 
```


### Setup 

- clone the repo and cd into folder 
- run yarn  
- copy .env.local.template to .env.local
- set env vars for auth and database 
  - get app token from github 
- run migrations and seed 

- apply hasura metadata 

#### How to seed the database

1. Run `hasura migrate apply --admin-secret=myadminsecret`
2. Run `hasura metadata apply --admin-secret=myadminsecret`
3. Login with any oauth providers
4. Check `accounts` table of the DB associated with Prisma
5. Copy the `user_id`
6. Use ```curl -H "X-API-Key: e0ad4d70" https://my.api.mockaroo.com/order_mock/YOUR_ID.sql?count=100``` to generate some dataset with `YOUR_ID`. You will get 100 rows of insert statements
7. Open hasura in `http://localhost:8080/` and feed the SQL statements into the DB
8. Go to `http://localhost:3000/my-account/orders` to see the data
9. Change the `user_id` of some rows to verify you can only query rows that matches your ID

### GraphQL - GraphQL Code Generator

Please install the vscode extension `GraphQL.vscode-graphql` for the best experience.

Use graphql-codegen to generate Typescript Definition and `react-query` hooks to fetch data.

The codegen also output a schema file for the hasura server to `src/framework/graphql/schema.graphql`. The file will be consumed in `.graphqlrc.yml` to provide auto-completion when creating new query files.

#### Settings file
```
codegen.yml
```
#### Command
```
yarn codegen
```
Always run `yarn codegen` followed by `yarn tsc` to generate new artifacts and perform typechecks when schema change

### GraphQL - writing queries / mutation
#### Group by feature
All graphql queries / mutations should be located in 
```
src/framework/graphql/{feature}/{operation_name}.{query,mutation,fragment}.graphql
```
#### GraphQL Operation folder and file structure
Example: 

```graphql
# src/framework/graphql/order/order.query.graphql
query order ($id: uuid!) {
  orders_by_pk(id: $id) {
    ...Order
  }
}

# src/framework/graphql/order/order.fragment.graphql
fragment Order on orders {
  id
  user_id
  status
  ... # other fields
}
```
Query/mutation name should be `camelCased`, while fragments (like TS types), should be `PascalCased`. File name should be `kebab-cased`.

Reusable fields should always be extracted as fragments.


### Consuming generated files
```
src/framework/graphql/generated.ts
```
The generate hooks will be available as `use{OperationName}{Query,Mutation}()`. For example, the above `order` query will be `useOrderQuery()`.

Fragments will be types named with `{Name}Fragment`, e.g. `OrderFragment`

#### TODO

todo: image proxy 
todo: payment - stripe / paypal 
todo: webhooks - save order to woocommerce for reporting 


### Migrate live db data 

- export table data as csv's 
- import csv data into tables 
- export schema structure and data for production 


### Deployment 

TBD - copilot for aws ecs fargate 


### Infrastructure 

TBD 
- create infratructure using tf or cloudformation 
  - vpc / network / security groups 
  - ec2 instances for services not containerized 
  - postgres rds instance 



