# api-library

> Add a library

```js
app.post('/library/', (req, res) => {
  res.json(library)
})
```

> Add a book to a library

```js
app.post('/library/book', (req, res) => {
  res.json(book)
})
```

> Create a book loan

```js
app.post('/library/book/loan', (req, res) => {
  res.json(loan)
})
```

> Complete loan

```js
app.put('/library/book/loan', (req, res) => {
  res.json(loan)
})
```
