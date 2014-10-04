var RakeLeavesCommandHandler = function () {

};

RakeLeavesCommandHandler.prototype.handle = function (command) {
  return 'Raking leaves at ' + command.address + ' on ' + command.dateTime.toString();
};

module.exports = RakeLeavesCommandHandler;
