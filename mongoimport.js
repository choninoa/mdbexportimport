
const fs = require('fs');
const optionDefinitions = [
    { name: 'path', alias: 'p', type: String },
    { name: 'database', alias: 'd', type: String },
    // { name: 'src', type: String, multiple: true, defaultOption: true },
    //{ name: 'timeout', alias: 't', type: Number }
]
const commandLineArgs = require('command-line-args');
const { executeSpawn } = require('./cmd')
const mainOptions = commandLineArgs(optionDefinitions, { stopAtFirstUnknown: true });
const dbName = mainOptions['database'], dir = mainOptions['path'];
fs.readdir(dir, (e, files) => {
    console.log(files);
    files.forEach(f => {
        const collection=f.split('.')[0]
        const n = `--db ${dbName} --collection ${collection} --file ${dir}/${f}`
        executeSpawn(`mongoimport`, n.split(' '))
        
    })
    console.log('Collections exported!!')
})

