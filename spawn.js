const { spawn } = require("child_process");
const { fs } = require('fs');
const CV = require('class-validator')
const moment = require('moment');
function constructPhoneNumber(cad) {
    let solved = cad.replace(/\D+/g, '')
    if (solved.length < 11)
        return '+1' + solved
    return '+' + solved

}
function main() {
    // const r=entity['fldFl32nHSg0PbKZf'] ? entity['fldFl32nHSg0PbKZf'] .replace(/\D+/g,''):''


    const r = "35/11/2000".replace(/\D+/g, '')//constructPhoneNumber("*ik347-930-5508")
    // console.log(rest)
    if (r.length >= 6) {
        const month = parseFloat(`${r[0]}${r[1]}`);
        let formed = ''
        if (month <= 12)
            formed = `${r[0]}${r[1]}/${r[2]}${r[3]}/${r.substring(4)}`
        else
            formed = `${r[2]}${r[3]}/${r[0]}${r[1]}/${r.substring(4)}`

        const converted = new Date(formed);
        const birthDate = CV.isDate(converted) ? converted : new Date();
        console.log(birthDate)
    }
    const bulk = "08:03:85"
    const date = CV.isDate(bulk) ? moment(bulk) : moment();
    // console.log(rest)
    return 0
    const ls = spawn('nvm', ['ls']);
    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
}
main();

