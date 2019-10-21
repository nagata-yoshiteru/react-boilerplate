const chalk = require('chalk');
const { exec } = require('child_process');
const { compare } = require('compare-versions');

const addXMark = require('./helpers/xmark');
const {
  requiredYarnVersion,
} = require('./helpers/get-required-node-yarn-versions');

exec('yarn -v', (err, stdout) => {
  if (err) throw err;

  const currentYarnVersion = stdout.trim();

  if (compare(currentYarnVersion, requiredYarnVersion, '<')) {
    addXMark(() =>
      process.stderr.write(
        chalk.red(
          ` You need yarn version v${requiredYarnVersion} or above but you are using v${currentYarnVersion}.\n\n`,
        ),
      ),
    );
    process.exit(1);
  }
});
