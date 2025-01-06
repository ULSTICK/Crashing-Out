/* <recipetype:thermal:bottler>.addRecipe("bottler_leather_canteen", 
<item:thirstcanteen:leather_canteen_full>.withTag({Purity:3}),
<item:thirstcanteen:leather_canteen>,
<fluid:minecraft:water> * 250, 
200);

<recipetype:thermal:bottler>.addRecipe("bottler_military_bottle", 
<item:thirstcanteen:military_bottle_full>.withTag({Purity:3}),
<item:thirstcanteen:military_bottle>,
<fluid:minecraft:water> * 500, 
400);

<recipetype:thermal:bottler>.addRecipe("bottler_dragon_bottle", 
<item:thirstcanteen:dragon_bottle_full>.withTag({Purity:3}),
<item:thirstcanteen:dragon_bottle>,
<fluid:minecraft:water>.withTag({Purity:3}) * 750, 
600); 

// <recipetype:thermal:bottler>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:bottler>.addJsonRecipe("bottler_leather_canteen",
<item:thirstcanteen:leather_canteen_full>.withTag({Purity:3}), 
<item:thirstcanteen:leather_canteen>,
<fluid:minecraft:water> * 250,
500); */