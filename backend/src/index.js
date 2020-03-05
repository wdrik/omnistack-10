const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

// --> Métodos HTPP: GET, POST, PUT, DELETE

// --> Tipos de parâmetros:
// Query Params: request.query (filtros, ordenação, paginação, etc...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

const app = express();

mongoose.connect('mongodb+srv://omnistack:1234@cluster0-nhv9j.mongodb.net/omnistack10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
