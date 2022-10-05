require('dotenv').config()
const crypto = require('crypto')
const path = require('node:path')
import { writeFileSync } from 'fs'
const { readdirSync, readFileSync, writeFile, existsSync } = require("fs")

class F_DATA extends Object {
        data:F_DATACollection
        name:string
        size:Number
        hash:string
        verifyData:()=> Boolean
        constructor(obj:Object, name:string ='', hash:string = '') {
            super()
            if(obj.hasOwnProperty('data') && obj.hasOwnProperty('name')) {
                return obj as F_DATA
            } else {
                throw new Error("Invalid object (missing Properties 'name' or 'data')")
            }
            
        }
        static verifyData ( ): Boolean { return true }
        
        static getUsers(base:string):F_DATACollection {
            return new F_DATACollection(base + '/users/', 'users')
        }
        static getGroups(base:string):F_DATACollection {
            return new F_DATACollection(base, 'groups')
        }
        static getContent(base:string, filename:string):Object {
            let content
            if(filename.split('.')[1] === 'md') {
                content = readdirSync(base + 'content/md').find((item:any) => String(item) === filename)
                return new F_DATA({
                    name: filename,
                    data: readFileSync(base + 'content/md/' + filename).toString()
                })
            }
            if (filename.split('.')[1] === 'json') {
                content = readdirSync(base + 'content/md').find((item:any) => String(item) === filename)
                return JSON.parse(readFileSync(base + 'content/md/' + filename).toString())
            }
            
            return null
        
        }
        
        static publishDevToStage ():Boolean { 
            return false 
        }
    }

class F_DATACollection extends Array {
    env: string

    constructor(base:string='/', name:string = 'all') {
        super ()
        
        readdirSync(base).forEach((file: string) => {
            if(file.slice(-5) == '.json') {
                let rawData = readFileSync(`${base}/${file}`)
                this.push(JSON.parse(rawData))
            }
        })
        return this
    }
}



exports.F_DATA = F_DATA


