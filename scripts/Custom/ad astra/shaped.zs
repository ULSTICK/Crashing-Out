import crafttweaker.api.tag.manager.ITagManager;
import crafttweaker.api.ingredient.type.IIngredientEmpty;

craftingTable.removeByModid("ad_astra");

craftingTable.addShaped("rover", <item:ad_astra:tier_1_rover>, [
    [<tag:items:forge:plates/steel>, IIngredientEmpty.getInstance(), <tag:items:forge:plates/steel>],
    [<tag:items:forge:chests>, <item:thermal:dynamo_compression>, <item:mekanism:basic_fluid_tank>],
    [<item:ad_astra:wheel>, <tag:items:forge:plates/steel>, <item:ad_astra:wheel>]]);

craftingTable.addShaped("wheels", <item:ad_astra:wheel>, [
    [<item:thermal:cured_rubber>, <item:thermal:cured_rubber>, <item:thermal:cured_rubber>],
    [<item:thermal:cured_rubber>, <tag:items:forge:gears/steel>, <item:thermal:cured_rubber>],
    [<item:thermal:cured_rubber>, <item:thermal:cured_rubber>, <item:thermal:cured_rubber>]]);