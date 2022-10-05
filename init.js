require('dotenv').config();
const clc = require('cli-color');
const readline = require('readline');
const fs = require('fs');
const uuidv4 = require('uuid').v4

const splash = `
${clc.magenta('𝄢_𝓈𝓉𝒶𝒸𝓀-𝒿𝓈')}
Frontend boilerplate project
`
let prompt = clc.greenBright(" 𝄢 ")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
    prompt: prompt
})
const template = [
	{
		"name": "Förnamn",
		"param": 'firstname',
	},
	{
		"name": "Efternamn",
		"param": "lastname",
	},
	{
		"name": "Tillhör grupp(er)",
		"param": "belongsTo",
	},
	{
		"name": "Discord användare",
		"param": "discord",
	},
	{
		"name": "Github användare",
		"param": "github",
	},
	{
		"name": `Personlighetstyp ${clc.red("röd")} ${clc.blue("blå")} ${clc.green("grön")} ${clc.yellow("gul")} `,
		"param": "personalityType",
	},
	{
		"name": "Färdigheter från tidigare arbete, utbildning, fritidsintresse eller erfarenheter (minst 3, separera med " + clc.yellowBright(", (kommatecken)") + ")",
		"param": "skills",
	},
	{
		"name": "Har du kul?",
		"param": "positiveExperience",
	},
	{
		"name": "Motivera",
		"param": "explanation",
	}
]

console.log(splash)

	let local = {}
	let key = process.env.PRIVATE_HASH_KEY
	if(fs.existsSync('./secrets.json')){
		let raw = fs.readFileSync('./secrets.json')
		local = JSON.parse(raw)
		delete local._SECRET_KEY
		template.forEach(element => {
			if(!local.hasOwnProperty(element.param)) {
				local[element.param] = ""
			}
		});
	}
	
	let i = 0;
	console.log('Börja med att fylla i lite personlig information. Du kan ändra dessa i efterhand, om du vill ta bort eller lägga till något.')
	rl.setPrompt(`${clc.cyan(template[i].name)} ${prompt}`)
	rl.prompt()
	rl.on("line", (line) => {
		local[template[i].param] = line
		i++
		if(i < template.length) {
			rl.setPrompt(`${clc.cyan(template[i].name)} ${prompt}`)
			rl.prompt()
		} else {
			rl.setPrompt(prompt)
			rl.close()
		}
		
	})
	rl.on('close', () => {
		console.log(local)
		fs.writeFileSync("./data/local.json", JSON.stringify(local))
	})

	if(!key) {
		fs.writeFileSync("./.env", `ENVIRONMENT=dev\nPRIVATE_HASH_KEY=${uuidv4()}`)
	}
	


