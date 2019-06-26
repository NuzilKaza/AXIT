let fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.food.length ); // 4

let dietItems = fridge.filterFood((item) => {
    return item.calories < 50;
});

dietItems.forEach((item) => {
    alert( item.title ); // сок, зелень
    fridge.removeFood(item);
});

alert( fridge.food.length ); // 2
