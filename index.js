const express = require("express")
const app = express()
const Todo = require('./models/todo_models.js')
// const Todo = require("./models/todo_models")
// const cors = require('cors')
// mongoose.connect('mongodb://127.0.0.1:27017/todo-crud')
// mongoose.connect('mongodb://mongo:sEuUeLFnrNRZEfjoiRMcIHOIKYgIaQia@mongodb.railway.internal:27017')
// .then(() => { console.log("DB connected") })

app.set('view engine', 'ejs')
Todo.connect().then(()=>console.log("Connected"))
app.use(express.json())
// app.use(cors())
// Todo.query(`CREATE TABLE users(email TEXT PRIMARY KEY NOT NULL, password TEXT NOT NULL)`)
// Todo.query(`INSERT INTO users (email, password) VALUES ('naba@gmail.com', 'gvhvhv')`)

// --------------------------------------------------------------
app.post('/user', async (req, res) => {
    
    // Todo.query(`INSERT INTO users DEFAULT VALUES`)
    const email = req.body.key1;
    const password = req.body.key2;
    Todo.query(`INSERT INTO users (email, password) VALUES ($1, $2)`,[email, password]);
    var result = await Todo.query(`SELECT * FROM users`);
    // res.redirect(`/${rows}`)
    // res.redirect(`/?q='rows'`)
    res.send(email);
    // res.send(req.body)
    // res.send(userid)
})


// -----------------------------------------------------------------


 app.get('/getdata', async (req, res) => {
    const email = req.query.e;
    const todo = await Todo.query(`select * from users where email=$1`,[email]);
    // await Todo.query(`DELETE FROM todos`)
    res.send(todo.rows);
})
app.post('/', (req, res) => {
    res.send("<h1>Hello!</h1>")
})
app.put('/', (req, res) => {
    res.send("<h1>Hello!</h1>")
})
app.delete('/', (req, res) => {
    res.send("<h1>Hello!</h1>")
})
app.listen(3000, () => {
    console.log("Successfully Connected")
})