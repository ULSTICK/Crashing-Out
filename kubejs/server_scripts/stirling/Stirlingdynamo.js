ServerEvents.recipes(event => {
    // Remove the original recipe for the Stirling Dynamo
    event.remove({ output: 'thermal:dynamo_stirling' });

    // Add the new custom recipe for the Stirling Dynamo
    event.shaped('thermal:dynamo_stirling', [
        ' R ',
        'IGI',
        'SBS'
    ], {
        R: 'thermal:rf_coil',
        I: 'minecraft:iron_ingot',
        G: 'thermal:iron_gear',
        S: '#forge:stone',
        B: 'mekanism:steel_casing'
    });
});
