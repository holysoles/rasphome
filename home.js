const { exec } = require('child_process')

//define configuration for local devices
const devices = {
    'lgtv': '58:FD:B1:96:1F:1A'
}


module.exports = {
    WakeOnLan: async function(hostname){
        var macAddr = devices[hostname];
        execStr = "wakeonlan " + macAddr;
        exec(execStr, (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                console.error(err)
            } else {
                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        });
    }
}
