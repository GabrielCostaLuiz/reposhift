const { exec } = require('node:child_process')
const os = require('os')

const isLinux = os.platform() === 'linux'
const command = isLinux
  ? 'sudo docker exec reposhift-dev pg_isready'
  : 'docker exec reposhift-dev pg_isready'

function checkPostgres() {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Error:', stderr || error.message)
      process.stdout.write('.')
      setTimeout(checkPostgres, 2000)
      return
    }

    if (stdout.includes('accepting connections')) {
      console.log('\n🟢 Postgres is ready!\n')
    } else {
      process.stdout.write('.')
      setTimeout(checkPostgres, 2000)
    }
  })
}

console.log('\n\n🟢🔴 Checking Postgres...')
checkPostgres()
