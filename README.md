# api-library

> Add a library

```js
app.post('/library/', (req, res) => {
  res.send('OK')
})
```

> Add a book to a library

```js
app.post('/library/book', (req, res) => {
  res.send('book')
})
```

> Create a book loan

```js
app.post('/library/book/loan', (req, res) => {
  res.send('book')
})
```

> Complete loan

```js
app.put('/library/book/loan', (req, res) => {
  res.send('book')
})
```
