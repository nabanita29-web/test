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
// Todo.query(`CREATE TABLE users(id SERIAL PRIMARY KEY, email TEXT, password TEXT)`)
// Todo.query(`INSERT INTO users (email, password) VALUES ('naba@gmail.com', 'gvhvhv')`)

// --------------------------------------------------------------
app.get('/user', async (req, res) => {
    
    // Todo.query(`INSERT INTO users DEFAULT VALUES`)

    // Todo.query(`INSERT INTO users (email, password) VALUES (req.params.email, req.param.pswd)`)
    var result = await Todo.query(`SELECT * FROM users`)
    // res.redirect(`/${rows}`)
    // res.redirect(`/?q='rows'`)
    res.json(result)
    // res.send(req.body)
    // res.send(userid)
})


// -----------------------------------------------------------------


// app.get('/', async (req, res) => {
    
//     // const id = req.query.q
//     // res.send(id)
//     // Todo.query(`INSERT INTO todos (task, dateof,id) VALUES ('XYZ', date '2026-02-13',userid)`)
//     const todo = await Todo.query(`select * from todos`)
//     // await Todo.query(`DELETE FROM todos`)
//     res.json(todo)
// })
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