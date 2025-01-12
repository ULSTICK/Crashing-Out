ServerEvents.recipes(event => {
    event.remove({ output: 'cold_sweat:filled_waterskin' });
    event.remove({ output: 'cold_sweat:waterskin' });
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' });

    exdeorum.removeDefaultSieveRecipes(event);
});
