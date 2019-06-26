let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.waterAmount = 100;

alert( `До: ${coffeeMachine.isRunning()}` ); // До: false

coffeeMachine.onReady = () => {
    alert( `После: ${coffeeMachine.isRunning()}` ); // После: false
};
coffeeMachine.run();
alert( `В процессе: ${coffeeMachine.isRunning()}` ); // В процессе: true
