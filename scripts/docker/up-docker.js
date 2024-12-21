const { exec } = require("node:child_process");
const os = require("os");

const isLinux = os.platform() === "linux";
const command = isLinux ? "sudo docker compose" : "docker compose";

async function commandDocker() {
  await exec(`${command} up -d`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

commandDocker();
