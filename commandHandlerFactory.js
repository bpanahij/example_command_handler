var MowLawnCommandHandler = require('./commandHandlers/mowLawnCommandHandler'),
  RakeLeavesCommandHandler = require('./commandHandlers/rakeLeavesCommandHandler');
/**
 *
 * @type {{
 *    createMowLawnCommandHandler: createMowLawnCommandHandler,
 *    createRakeLeavesCommandHandler: createRakeLeavesCommandHandler
 *  }}
 */
module.exports = {
  createMowLawnCommandHandler: function () {
    return new MowLawnCommandHandler();
  },
  createRakeLeavesCommandHandler: function () {
    return new RakeLeavesCommandHandler();
  }
};
