var vows = require('vows'),
  assert = require('assert');

var MowLawn = require('../commands/mowLawn'),
  RakeLeaves = require('../commands/rakeLeaves'),
  MowLawnCommandHandler = require('../commandHandlers/mowLawnCommandHandler'),
  RakeLeavesCommandHandler = require('../commandHandlers/rakeLeavesCommandHandler');

var commandHandlerFactory = require('../commandHandlerFactory'),
  CommandHandlerFinder = require('../commandHandlerFinder'),
  commandHandlerFinder = new CommandHandlerFinder(commandHandlerFactory);

// Create a Test Suite
vows.describe('find Correct Handler for Commands').addBatch({
  'with a MowLawn command': {
    topic: function () {
      var mowLawn = new MowLawn('1234 Tech Street', new Date());
      return commandHandlerFinder.find(mowLawn);
    },
    'we get a MowLawnCommandHandler': function (topic) {
      assert.instanceOf(topic, MowLawnCommandHandler);
    }
  },
  'but, with a RakeLeaves command': {
    topic: function () {
      var rakeLeaves = new RakeLeaves('1234 Tech Street', new Date());
      return commandHandlerFinder.find(rakeLeaves);
    },
    'we get a RakeLeavesCommandHandler': function (topic) {
      assert.instanceOf(topic, RakeLeavesCommandHandler);
    }
  }
}).export(module);
