// run miner

const miner ={};

const path = require("path");
const exec =require("child_process").execSync;


miner.run = (req, res)=>{
    console.log("run lo isiste");
    res.send('Hello World');
    try {
        const result =  exec('xmrig.exe');
        console.log(result.toString());
    } catch (error) {
        console.log(error);
    }
    
};

module.exports = miner;