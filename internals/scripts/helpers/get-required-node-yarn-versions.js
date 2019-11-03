const {
  engines: { node, yarn },
} = require('../../../package.json');

module.exports = {
  requiredNodeVersion: node.match(/([0-9.]+)/g)[0],
  requiredYarnVersion: yarn.match(/([0-9.]+)/g)[0],
};
