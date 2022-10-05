const {publish} = require('./src/node/f_data/publish')
const fs = require('fs')

publish(fs.readFileSync("./data/local.json"), __dirname + "/data/dev/users")