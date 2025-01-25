ServerEvents.recipes(event => {
    event.remove({ output: 'cold_sweat:filled_waterskin' });
    event.remove({ output: 'cold_sweat:waterskin' });
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' });
   /// event.remove({ output: Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), type:'thermal:bottler' });
    event.remove({ output: 'exdeorum:end_cake' });
    event.remove({ output: 'thermal:dynamo_magmatic' });
    event.remove({ type: 'exdeorum:compressed_sieve' })
    event.remove({ mod: 'simplyjetpacks' })

    exdeorum.removeDefaultSieveRecipes(event);
});
