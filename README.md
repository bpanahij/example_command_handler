Example Command Handler
=======================

After searching for a good example of the command/handler pattern, I struggled to find one that cleanly separated the command from the handler. After finding a few, but none in Javascript, I decided to write my own example for all you out there who are seeking a solution. Here it is.


##The way it works
Instantiate a new command, ask the command handler finder to find the handle, or as a convenience handle the command.

##The benefits
The real benefit is the cleaness of the API. The constructors of the command and the handler each explicitly require their dependencies. The created command and handler objects provide clear usage instructions through a clean API.

###Clean API (I in SOLID)
```
var command = new Command();
var handler = new HandlerFinder().find(command);
var result handler->handle(command);
```
or
```
var result = new HandlerFinder().handle(new Command());
```

###Clean Separating of Concerns (S in SOLID)
The nice thing about separating command from handlers is the clean separation of the semantic command and the implementation details within the handler. The implementation details can change, and the Command does not need to change. Handlers can be switched out based on special cases, time sensitive scenarios, and even A/B testing.





