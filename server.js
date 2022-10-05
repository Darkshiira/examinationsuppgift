const hljs = require('highlight.js');

require("dotenv").config()
const open = require("open")
const express = require("express")
const { marked } = require('marked')
const path = require("path")
const {F_DATA} = require('./src/node/f_data/f_data.js')
app = express()
const port = process.env.DEV_SERVER_PORT || 3000

app.use(express.static(path.join(__dirname, "www/dev")))

app.get('/api', (req, res) => {
  res.json({
    "name": "f_stack-js api version 1.0.0",
    "endpoints": {
      "api/users/": "returns all users in current environment",
      "/api/content/:filename": "returns files included in current environment. .md or .json",
      "/api/content/render/:filename": "returns markup from .md files, parsed with markedjs."
    }
  })
})

app.get('/api/users', (req, res) => {
  res.json(F_DATA.getUsers(__dirname + "/data/dev/"))
})
app.get('/api/content/render/:filename', (req,res) => {
  const data = F_DATA.getContent(__dirname + "/data/dev/", req.params.filename)
  res.send(marked.parse(data.data))
}) 

app.get('/api/content/:filename', (req, res) => {
  let content = F_DATA.getContent(__dirname + "/data/dev/", req.params.filename)
  res.json(content)
})

const server = () => app.listen(port, () => {
  console.log(`
  Frontend running on http://localhost:${port}/
  API running on http://localhost:${port}/api
  `)
  open(`http://localhost:${port}/`)
})


exports.server = server()