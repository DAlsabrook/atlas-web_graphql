const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const connectionString = `mongodb+srv://dfalsabrook:FGKlcCtLJZl7X7yC@cluster0.4ys2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
