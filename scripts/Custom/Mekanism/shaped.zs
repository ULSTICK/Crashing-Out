import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.ingredient.type.IIngredientEmpty;

recipes.remove(<item:mekanism:steel_casing>);
recipes.remove(<item:mekanism:advanced_control_circuit>);
recipes.remove(<item:mekanism:elite_control_circuit>);
recipes.remove(<item:mekanism:ultimate_control_circuit>);
recipes.remove(<item:mekanism:electric_pump>);


craftingTable.addShaped("mek_steel_casing", <item:mekanism:steel_casing>, [
    [<tag:items:forge:ingots/steel>, <tag:items:forge:storage_blocks/glass>, <tag:items:forge:ingots/steel>],
    [<tag:items:forge:storage_blocks/glass>, <item:pneumaticcraft:printed_circuit_board>, <tag:items:forge:storage_blocks/glass>],
    [<tag:items:forge:ingots/steel>, <tag:items:forge:storage_blocks/glass>, <tag:items:forge:ingots/steel>]]);

craftingTable.addShaped("mekanism_control_circuit/advanced",
<item:mekanism:advanced_control_circuit>, [
    [IIngredientEmpty.getInstance(), <item:pneumaticcraft:printed_circuit_board>, IIngredientEmpty.getInstance()],
    [<tag:items:mekanism:alloys/infused>, <tag:items:forge:circuits/basic>, <tag:items:mekanism:alloys/infused>],
    [IIngredientEmpty.getInstance(), <item:pneumaticcraft:printed_circuit_board>, IIngredientEmpty.getInstance()]
]);

craftingTable.addShaped("mekanism_control_circuit/elite",
<item:mekanism:elite_control_circuit>, [
    [IIngredientEmpty.getInstance(), <item:pneumaticcraft:printed_circuit_board>, IIngredientEmpty.getInstance()],
    [<tag:items:mekanism:alloys/infused>, <tag:items:forge:circuits/advanced>, <tag:items:mekanism:alloys/infused>],
    [IIngredientEmpty.getInstance(), <item:pneumaticcraft:printed_circuit_board>, IIngredientEmpty.getInstance()]
]);

craftingTable.addShaped("mekanism_control_circuit/ultimate",
<item:mekanism:ultimate_control_circuit>, [
    [IIngredientEmpty.getInstance(), <item:pneumaticcraft:printed_circuit_board>, IIngredientEmpty.getInstance()],
    [<tag:items:mekanism:alloys/infused>, <tag:items:forge:circuits/elite>, <tag:items:mekanism:alloys/infused>],
    [IIngredientEmpty.getInstance(), <item:pneumaticcraft:printed_circuit_board>, IIngredientEmpty.getInstance()]
]);

craftingTable.addShaped("mekanism_electric_pump",
<item:mekanism:electric_pump>, [
    [<item:ae2:cell_component_256k>, <item:minecraft:bucket>, <item:ae2:cell_component_256k>], 
    [<tag:items:mekanism:alloys/infused>, <item:mekanism:steel_casing>, <tag:items:mekanism:alloys/infused>], 
    [<tag:items:forge:ingots/osmium>, <tag:items:forge:ingots/osmium>, <tag:items:forge:ingots/osmium>]]);

<recipetype:mekanism:metallurgic_infusing>.addRecipe("control_circuit/basic",
<item:pneumaticcraft:printed_circuit_board>,
<tag:mekanism/infuse_type:mekanism:redstone> * 20,
<item:mekanism:basic_control_circuit>);