var MowLawn = require('./commands/mowLawn'),
  RakeLeaves = require('./commands/rakeLeaves');
/**
 *
 * @constructor
 */
var CommandHandlerFinder = function(commandHandlerFactory) {
  this.commandHandlerFactory = commandHandlerFactory;
};
/**
 *
 * @param command
 * @returns {*}
 */
CommandHandlerFinder.prototype.find = function (command) {
  switch (true) {
    case command instanceof MowLawn:
      return this.commandHandlerFactory.createMowLawnCommandHandler();
    case command instanceof RakeLeaves:
      return this.commandHandlerFactory.createRakeLeavesCommandHandler();
    default:
      throw new Error('Command Handler does not exist for ' + typeof command);
  }
};
/**
 *
 * @param command
 * @returns {*}
 */
CommandHandlerFinder.prototype.handle = function(command) {
  return this.find(command).handle(command);
};

module.exports = CommandHandlerFinder;
