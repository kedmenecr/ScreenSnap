#!/usr/bind/env node
const { exec } = require("child_process");

let folder = process.argv[2];
let sleepTime = process.argv[3];

exec(`cd && mkdir ${folder}`, err => {
  if (err) {
    console.log("Folder is already taken");
  }
});

exec(
  `while [ 1 ];do vardate=$(date +%d-%m-%Y_%H.%M.%S);
   screencapture -t jpg -x ~/${folder}/$vardate.jpg; sleep ${sleepTime}; done `,
  (err, stdout) => {
    if (err) {
      console.log("not gonna happen");
      return;
    }
  }
);

// }
