const { exec,spawn } = require("child_process");
function executeExc(cmd){
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        const versions = stdout.split('\r\n')
        console.log(versions);
        return;
    });
}

function executeSpawn(cmd,args){
    const ls = spawn(cmd, args);
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
module.exports={
    executeExc,
    executeSpawn
}