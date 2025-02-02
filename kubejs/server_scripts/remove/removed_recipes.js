ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' });
    event.remove({ output: 'exdeorum:end_cake' });
    event.remove({ output: 'thermal:dynamo_magmatic' });
    event.remove({ output: 'industrialforegoing:mycelial_magma' });
    event.remove({ type: 'exdeorum:compressed_sieve' });
    event.remove({ mod: 'simplyjetpacks' });
    event.remove({ mod: 'ad_astra' });
    event.remove({ id: 'tconstruct:molten_pewter' });
    event.remove({ output: 'minecraft:potion', type: 'tconstruct:casting_table' });
    event.remove({ type: 'tconstruct:casting_table_potion' });
    event.remove({ type: 'exdeorum:water_crucible' });
    

    exdeorum.removeDefaultSieveRecipes(event);
});
