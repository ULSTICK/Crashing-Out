ServerEvents.recipes(event => {
    event.remove({ output: 'cold_sweat:filled_waterskin' });
    event.remove({ output: 'cold_sweat:waterskin' });
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' });
    event.remove({ output: 'thirstcanteen:military_bottle' });
    event.remove({ output: 'thirstcanteen:dragon_bottle' });

    exdeorum.removeDefaultSieveRecipes(event);
});
