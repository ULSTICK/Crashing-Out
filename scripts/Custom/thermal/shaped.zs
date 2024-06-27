import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.recipe.replacement.Replacer; import crafttweaker.api.ingredient.IIngredient;

recipes.remove(<item:thermal:device_water_gen>);

Replacer.create().replace<IIngredient>(<recipecomponent:crafttweaker:input/ingredients>, <item:thermal:machine_frame>, <item:mekanism:steel_casing>).execute();



 craftingTable.addShaped("thermal.tdevice_water_gen", <item:thermal:device_water_gen>, [
    [<tag:items:forge:ingots/copper>, <tag:items:forge:ingots/iron>, <tag:items:forge:ingots/copper>], 
    [<item:ae2:cell_component_256k>, <item:minecraft:bucket>, <item:ae2:cell_component_256k>], 
    [<tag:items:forge:ingots/copper>, <item:thermal:redstone_servo>, <tag:items:forge:ingots/copper>]]);



<recipetype:thermal:centrifuge>.addJsonRecipe("centrifuge_water_sapling", {
  "type": "thermal:centrifuge",
  "ingredient": {
    "tag": "forge:sapling"
  },
  "result": [
    {
      "item": "minecraft:stick",
      "chance": 0.75,
      "locked": true
    },
    {
      "fluid": "minecraft:water",
      "amount": 100
    }
  ],
  "energy": 1000,
  "experience": 1.0
});

<recipetype:thermal:centrifuge>.addJsonRecipe("centrifuge_water_leaves", {
  "type": "thermal:centrifuge",
  "ingredient": {
    "tag": "minecraft:leaves"
  },
  "result": [
    {
      "tag": "forge:sapling",
      "chance": 0.35,
      "locked": true
    },
        {
      "item": "minecraft:stick",
      "chance": 0.75,
      "locked": true
    },
    {
      "fluid": "minecraft:water",
      "amount": 100
    }
  ],
  "energy": 1000,
  "experience": 1.0
});