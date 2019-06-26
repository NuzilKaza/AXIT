let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.waterAmount = 150;

coffeeMachine.setOnReady(() => {
    let amount = coffeeMachine.waterAmount;
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();