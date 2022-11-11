/** Command-line tool to generate Markov text. */

const axios = require('axios');
const {MarkovMachine} = require("./markov");
const fs = require('fs');


args = process.argv

function fileText(file){

    fs.readFile(file,'utf8', (error,data) => {
        if (error){
            module.exports =  console.log(error.message)
            return
        }
        const newMark = new MarkovMachine(data)
        const newText = newMark.makeText();
        module.exports = console.log(newText)
    })
}


function urlText(url){
    axios.get(url).then(data=>{
        const newMark = new MarkovMachine(data.data)
        const newText = newMark.makeText();
        module.exports = console.log(newText)
    }).catch(err =>{
        module.exports = console.log(err.message)
    })
}


if (args[2] == "file"){
    fileText(args[3])
}

if (args[2] == "url"){
    urlText(args[3])
}