import mods.create.FillingManager;

<recipetype:create:filling>.addRecipe("filling_canteen_3", 
<item:survive:filled_canteen>.withTag({DrinksLeft: 3, Potion: "survive:purified_water"}),
<item:survive:filled_canteen>.withTag({DrinksLeft: 2, Potion: "survive:purified_water"}),
<fluid:survive:purified_water> * 1000, 200);

<recipetype:create:filling>.addRecipe("filling_canteen_2", 
<item:survive:filled_canteen>.withTag({DrinksLeft: 2, Potion: "survive:purified_water"}),
<item:survive:filled_canteen>.withTag({DrinksLeft: 1, Potion: "survive:purified_water"}),
<fluid:survive:purified_water> * 1000, 200);

<recipetype:create:filling>.addRecipe("filling_canteen_1", 
<item:survive:filled_canteen>.withTag({DrinksLeft: 1, Potion: "survive:purified_water"}),
<item:survive:canteen>,
<fluid:survive:purified_water> * 1000, 200);

<recipetype:create:filling>.addRecipe("filling_canteen_6", 
<item:survive:filled_canteen>.withTag({DrinksLeft: 3, Potion: "minecraft:water"}),
<item:survive:filled_canteen>.withTag({DrinksLeft: 2, Potion: "minecraft:water"}),
<fluid:minecraft:water> * 1000, 200);

<recipetype:create:filling>.addRecipe("filling_canteen_5", 
<item:survive:filled_canteen>.withTag({DrinksLeft: 2, Potion: "minecraft:water"}),
<item:survive:filled_canteen>.withTag({DrinksLeft: 1, Potion: "minecraft:water"}),
<fluid:minecraft:water> * 1000, 200);

<recipetype:create:filling>.addRecipe("filling_canteen_4", 
<item:survive:filled_canteen>.withTag({DrinksLeft: 1, Potion: "minecraft:water"}),
<item:survive:canteen>,
<fluid:minecraft:water> * 1000, 200);