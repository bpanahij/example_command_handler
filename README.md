Example Command Handler
=======================

After searching for a good example of the command/handler pattern, I struggled to find one that cleanly separated the command from the handler. After finding a few, but none in Javascript, I decided to write my own example for all you out there who are seeking a solution. Here it is.


##The way it works
Instantiate a new command, ask the command handler finder to find the handle, or as a convenience handle the command.

##The benefits
The real benefit is the cleaness of the API. The constructors of the command and the handler each explicitly require their dependencies. The created command and handler objects provide clear usage instructions through a clean API.

###Clean Separating of Concerns (S in SOLID)
The nice thing about separating command from handlers is the clean separation of the semantic command and the implementation details within the handler. The implementation details can change, and the Command does not need to change. Handlers can be switched out based on special cases, time sensitive scenarios, and even A/B testing.

###Clean API (I in SOLID)
```
var MowLawn = require('./../commands/mowLawn'),
  RakeLeaves = require('./../commands/rakeLeaves');

var commandHandlerFactory = require('./../commandHandlerFactory'),
  CommandHandlerFinder = require('./../commandHandlerFinder'),
  commandHandlerFinder = new CommandHandlerFinder(commandHandlerFactory),
  mowLawn = new MowLawn('1234 Tech Street', new Date()),
  mowLawnResult = commandHandlerFinder.handle(mowLawn);

console.log(mowLawnResult);


rakeLeavesResult = commandHandlerFinder.handle(new RakeLeaves('1234 Yay Lane', new Date()));
console.log(rakeLeavesResult);

```

###Dependeny Inversion (D in SOLID)
Also know as dependency injection (DI), or at least satisfied by extensive DI. This example uses DI throughout, and thus allows the top level controller, or in this case a factory to handle all dependencies.
```
/**
 *
 * @constructor
 */
var CommandHandlerFinder = function(commandHandlerFactory) {
  this.commandHandlerFactory = commandHandlerFactory;
};
...
```
##The non-solid compromises

###Open Closed (O in SOLID)
Javascript siffers from weaknesses in this arena. This code could easily use closures to obey the O. Currently the 
example does not satisfy O.

###Liskov Subsstitution (L in SOLID)
This example does not satisfy Liskov because it does not define an interface. It so happens that the example does not
suffer from any drawbacks from failing Liskov, but it might if the example bacme much larger.





