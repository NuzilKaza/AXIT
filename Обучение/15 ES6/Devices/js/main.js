let coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(400); // Нельзя залить больше, чем 400
coffeeMachine.run();