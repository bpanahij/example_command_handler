var vows = require('vows'),
  assert = require('assert');

var MowLawn = require('../commands/mowLawn'),
  RakeLeaves = require('../commands/rakeLeaves');

var commandHandlerFactory = require('../commandHandlerFactory'),
  CommandHandlerFinder = require('../commandHandlerFinder'),
  commandHandlerFinder = new CommandHandlerFinder(commandHandlerFactory);

// Create a Test Suite
vows.describe('Handle Commands').addBatch({
  'with a MowLawn command': {
    topic: function () {
      var mowLawn = new MowLawn('1234 Tech Street', new Date());
      return commandHandlerFinder.handle(mowLawn);
    },
    'we get a MowLawnCommandHandler': function (topic) {
      assert.equal(topic.substr(0, 14), 'Mowing lawn at ');
    }
  },
  'but, with a RakeLeaves command': {
    topic: function () {
      var rakeLeaves = new RakeLeaves('1234 Tech Street', new Date());
      return commandHandlerFinder.handle(rakeLeaves);
    },
    'we get a RakeLeavesCommandHandler': function (topic) {
      assert.equal(topic.substr(0, 14), 'Raking leaves at ');
    }
  }
}).export(module);
