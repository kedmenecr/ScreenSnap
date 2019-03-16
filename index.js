const { exec } = require("child_process");

// second parameter is the folder name
let folder = process.argv[2];

exec(`cd && mkdir ${folder}`, err => {
  if (err) {
    console.log("not gonna happen");
  }
});

exec(
  `while [ 1 ];do vardate=$(date +%d-%m-%Y_%H.%M.%S); screencapture -t jpg -x ~/Projects/Gh/devLaps-ss/$vardate.jpg; sleep 1; done`,
  (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

// while [ 1 ];do vardate=$(date +%d\-%m\-%Y\_%H.%M.%S); screencapture -t jpg -x ~/Projects/Gh/devLaps-ss/$vardate.jpg; sleep 1; done
