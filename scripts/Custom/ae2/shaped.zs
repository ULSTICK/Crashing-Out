import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.ingredient.type.IIngredientEmpty;

<recipetype:ae2:inscriber>.remove(<item:ae2:printed_logic_processor>);
<recipetype:ae2:inscriber>.remove(<item:ae2:printed_engineering_processor>);
<recipetype:ae2:inscriber>.remove(<item:ae2:printed_calculation_processor>);

<recipetype:ae2:inscriber>.addJsonRecipe("printed_logic_processor", {
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:ingots/gold"
    },
    "top": {
      "item": "ae2:logic_processor_press"
    },
        "bottom": {
      "item": "pneumaticcraft:printed_circuit_board"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_logic_processor"
  }
});

<recipetype:ae2:inscriber>.addJsonRecipe("printed_engineering_processor", {
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:gems/diamond"
    },
    "top": {
      "item": "ae2:engineering_processor_press"
    },
        "bottom": {
      "item": "pneumaticcraft:printed_circuit_board"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_engineering_processor"
  }
});

<recipetype:ae2:inscriber>.addJsonRecipe("printed_calculation_processor", {
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "ae2:certus_quartz_crystal"
    },
    "top": {
      "item": "ae2:calculation_processor_press"
    },
        "bottom": {
      "item": "pneumaticcraft:printed_circuit_board"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_calculation_processor"
  }
});

