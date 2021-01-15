# Api Docs

### Base URL
```
localhost:3333/integration
```

### Integrate Pipedrive with Bling
```
GET /integrate
```

### Update Repository with Bling Daily Orders
```javascript
PUT /update-repository

Filters: {
    token: string (Bling token)
    date: string (ex: 15/01/2021)
}
```

### Load All Orders of Repository
```shell
GET /orders
```