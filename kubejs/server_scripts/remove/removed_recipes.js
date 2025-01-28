ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' });
    event.remove({ output: 'exdeorum:end_cake' });
    event.remove({ output: 'thermal:dynamo_magmatic' });
    event.remove({ output: 'industrialforegoing:mycelial_magma' });
    event.remove({ type: 'exdeorum:compressed_sieve' });
    event.remove({ mod: 'simplyjetpacks' });
    event.remove({ id: 'tconstruct:molten_pewter' })

    exdeorum.removeDefaultSieveRecipes(event);
});
