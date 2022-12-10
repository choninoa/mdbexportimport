//import { exec } from "child_process";
const { exec } = require("child_process");

exec("nvm ls", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    const versions=stdout.split('\n')

    console.log(versions);
});

const fs = require('fs');
fs.readdir(__dirname, (e, files) => {
    console.log(files);
});
    // [ 201, 202, sales.json, totals.txt ]
