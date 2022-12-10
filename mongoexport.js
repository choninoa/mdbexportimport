
const fs = require('fs');
//const cmds=fs.createWriteStream('cmds.cmd');
const optionDefinitions = [
    { name: 'database', alias: 'd', type: String },
    { name: 'collection', alias: 'c', type: String },
    { name: 'output', alias: 'o', type: String },
    // { name: 'src', type: String, multiple: true, defaultOption: true },
    //{ name: 'timeout', alias: 't', type: Number }
]
const commandLineArgs = require('command-line-args');
const mainOptions = commandLineArgs(optionDefinitions, { stopAtFirstUnknown: true });

//console.log('mainOptions\n===========')
//console.log(mainOptions)
const mongoose = require('mongoose');
const dbName=mainOptions['database']
mongoose.connect(`mongodb://localhost/${dbName}`)
mongoose.connection.on('open', async (ref) => {   
    console.log('Connected to mongo server.');
    const names=[];
    mongoose.connection.db.listCollections()
    .forEach(async e=>{
        const cmd=`--db ${dbName} --collection ${e.name} --out ./collections/${e.name}.json`        
        names.push(cmd);  
        //await  cmds.write(cmd) ; 
    })
    .finally(f=>{
        //console.log(names);
      
        console.log(names[0]);
        const {executeSpawn}=require('./cmd')
        names.forEach(n=> executeSpawn(`mongoexport`,n.split(' ')))
        console.log('Collections exported!!')
        mongoose.connection.destroy()
    });
    
});

//


/*fs.readdir(__dirname, (e, files) => {
    // console.log(files);
});*/

    // [ 201, 202, sales.json, totals.txt ]
