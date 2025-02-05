const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285951417221@s.whatsapp.net"]
global.nomerOwner = "6285951417221"
global.nomorOwner = ['6285951417221']
global.namaDeveloper = "友 | —͟͞͞𝙍𝙞𝙠𝙯𝙯𝙕𝙝𝙞𝙧𝙤" //jangn diubh bng
global.namaOwner = "RikzzZhiro Gen 4"
global.namaBot = "RikzzZhiro Gen 4"
global.versionBot = "4.𝟎.𝟎"
global.packname = "RikzzZhiro Gen 4"
global.author = "RikzzZhiro Gen 4"
global.thumb = fs.readFileSync("./RikzzZhiro.png")
global.ThM = 'https://img86.pixhost.to/images/492/563091315_rikzzzhiro.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
