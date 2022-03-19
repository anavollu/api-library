# api-library

> Add a library

```js
app.post('/library/', (req, res) => {
  res.json(library)
})
```

> Add a book to a library

```js
app.post('/library/:id/book', (req, res) => {
  res.json(book)
})
```

> Create a book loan

```js
app.post('/book/:id/loan', (req, res) => {
  res.json(loan)
})
```

> Complete loan

```js
app.post('/loan/:id/finish', (req, res) => {
  res.json(loan)
})
```
