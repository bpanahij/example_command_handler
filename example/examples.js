var MowLawn = require('./../commands/mowLawn'),
  RakeLeaves = require('./../commands/rakeLeaves');

var commandHandlerFactory = require('./../commandHandlerFactory'),
  CommandHandlerFinder = require('./../commandHandlerFinder');

var commandHandlerFinder = new CommandHandlerFinder(commandHandlerFactory);

var mowLawn = new MowLawn('1234 Tech Street', new Date()),
  rakeLeaves = new RakeLeaves('1234 Yay Lane', new Date());

var mowLawnResult = commandHandlerFinder.handle(mowLawn),
  rakeLeavesResult = commandHandlerFinder.handle(rakeLeaves);

console.log(mowLawnResult);
console.log(rakeLeavesResult);
