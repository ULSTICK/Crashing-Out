import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.ingredient.type.IIngredientEmpty;

recipes.remove(<item:refinedstorage:basic_processor>);
recipes.remove(<item:refinedstorage:improved_processor>);
recipes.remove(<item:refinedstorage:advanced_processor>);
recipes.remove(<item:refinedstorage:1k_storage_part>);
recipes.remove(<item:refinedstorage:64k_fluid_storage_part>);



craftingTable.addShaped("1k_storage_part", <item:refinedstorage:1k_storage_part>, [
    [<tag:items:forge:silicon>, <item:refinedstorage:quartz_enriched_iron>, <tag:items:forge:silicon>],
    [<item:minecraft:glass>, <item:refinedstorage:basic_processor>, <item:minecraft:glass>],
    [<tag:items:forge:silicon>, <item:minecraft:glass>, <tag:items:forge:silicon>]]);

craftingTable.addShaped("64k_fluid_storage_part", <item:refinedstorage:64k_fluid_storage_part>, [
    [<tag:items:forge:silicon>, <item:refinedstorage:quartz_enriched_iron>, <tag:items:forge:silicon>],
    [<item:minecraft:glass>, <item:refinedstorage:basic_processor>, <item:minecraft:glass>],
    [<tag:items:forge:silicon>, <item:minecraft:bucket>, <tag:items:forge:silicon>]]);



<recipetype:ae2:inscriber>.addJsonRecipe("basic_processor", {
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "refinedstorage:raw_basic_processor"
    },
    "top": {
      "item": "minecraft:redstone"
    },
        "bottom": {
      "item": "pneumaticcraft:printed_circuit_board"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "refinedstorage:basic_processor"
  }
});

<recipetype:ae2:inscriber>.addJsonRecipe("improved_processor", {
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "refinedstorage:raw_improved_processor"
    },
    "top": {
      "item": "minecraft:redstone"
    },
        "bottom": {
      "item": "pneumaticcraft:printed_circuit_board"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "refinedstorage:improved_processor"
  }
});

<recipetype:ae2:inscriber>.addJsonRecipe("advanced_processor", {
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "refinedstorage:raw_advanced_processor"
    },
    "top": {
      "item": "minecraft:redstone"
    },
        "bottom": {
      "item": "pneumaticcraft:printed_circuit_board"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "refinedstorage:advanced_processor"
  }
});