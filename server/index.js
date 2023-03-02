const express = require("express");
const mongoose = require("mongoose");
const taskModel = require("./models/task.model.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://valentinotraverso:DgzcMnnmOC1qNxBA@firstproject.1rzkurw.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Hi Valentino! You are connected to the server'))
    .catch(error => console.log(error));

app.post('/', (req, res) => {
    const task = taskModel(req.body);
    task.save()
        .then(data => res.json(req.body))
        .catch(error => res.json(error));
})

// app.get('/', (req, res) => {
//     res.send('Welcome to the server Valentino');
// })

app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`);
})