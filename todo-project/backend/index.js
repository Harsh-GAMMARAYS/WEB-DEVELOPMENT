const express = require('express')
const app = express()
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors = require("cors");
const port = 3000


app.use(express.json());
app.use(cors());



app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    })
    return;
  }
  //mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "Todo Created"
  })
})



app.get('/todos', async (req, res) => {
  const todos = await todo.find({});
  res.json({todos})
})




app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    })
    return;
  }
  await todo.update({
    _id: req.body.id  
  },{
    completed: true
  })
  res.json({ msg: "Todo marked as completed"})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})