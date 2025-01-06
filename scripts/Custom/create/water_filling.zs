import mods.createtweaker.FillingRecipe;
import mods.createtweaker.ProcessingOutput;


//-------------------------------------------------------------------------------


<recipetype:create:filling>.addRecipe("fill_leather_canteen", 
<item:thirstcanteen:leather_canteen_full>.withTag({Purity:3}),
<item:thirstcanteen:leather_canteen>,
<fluid:minecraft:water> * 250, 
200);

<recipetype:create:filling>.addRecipe("fill_military_bottle", 
<item:thirstcanteen:military_bottle_full>.withTag({Purity:3}),
<item:thirstcanteen:military_bottle>,
<fluid:minecraft:water> * 500, 
400);

<recipetype:create:filling>.addRecipe("fill_dragon_bottle", 
<item:thirstcanteen:dragon_bottle_full>.withTag({Purity:3}),
<item:thirstcanteen:dragon_bottle>,
<fluid:minecraft:water> * 750, 
600);


//-------------------------------------------------------------------------------


/*craftingTable.addShapeless("fill_leather_canteen_shapeless_3", 
<item:thirstcanteen:leather_canteen_full>.withTag({Purity: 3}), 
    [
        <item:minecraft:potion>.withTag({Purity: 3, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:minecraft:potion>.withTag({Purity: 3, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:minecraft:potion>.withTag({Purity: 3, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:minecraft:potion>.withTag({Purity: 3, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:thirstcanteen:leather_canteen>
    ]
);

craftingTable.addShapeless("fill_leather_canteen_shapeless_0", 
    <item:thirstcanteen:leather_canteen_full>.withTag({Purity: 0}), 
    [
        <item:minecraft:potion>.withTag({Purity: 0, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:minecraft:potion>.withTag({Purity: 0, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:minecraft:potion>.withTag({Purity: 0, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:minecraft:potion>.withTag({Purity: 0, Potion: "minecraft:water"}).transformReplace(<item:minecraft:glass_bottle>),
        <item:thirstcanteen:leather_canteen>
    ]
); */