require('dotenv').config()
const  {F_DATA}  = require('./f_data')
const crypto = require('crypto')
const { writeFileSync } = require("fs")

function publishSecure (content, target) { 
    let output
    let hash = crypto.createHash('sha256')
    try{
        output = JSON.parse(content)
        hash.update(JSON.stringify(output) + process.env.PRIVATE_HASH_KEY)
        output.hash = hash.digest('hex')
        let hashedFileName = crypto.createHash('sha256')
        hashedFileName.update(JSON.stringify(output))
        const filename = `${target}/${hashedFileName.digest('hex')}.json`
        writeFileSync(filename, JSON.stringify(output))
        return true
    } catch(e) {
        console.debug(e)
        return false
    }
}

exports.publish = (content, target) => {
    publishSecure(content, target)
}