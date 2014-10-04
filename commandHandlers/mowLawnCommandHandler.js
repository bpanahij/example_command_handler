var MowLawnCommandHandler = function () {

};

MowLawnCommandHandler.prototype.handle = function (command) {
  return 'Mowing lawn at ' + command.address + ' on ' + command.dateTime.toString();
};

module.exports = MowLawnCommandHandler;
