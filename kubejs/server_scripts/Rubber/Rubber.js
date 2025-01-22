ServerEvents.recipes(event => {
    // Remove any existing recipe for mekansim:steel_casing
    event.remove({ output: 'mekanism:steel_casing' });

    // Add the new crafting recipe for Mekanism Steel Casing
    event.shaped('mekanism:steel_casing', [
        'SGS', // Top row: Steel ingots in corners, Glass in the middle
        'GCG', // Middle row: Glass on sides, Compressed Iron Gear in center
        'SGS'  // Bottom row: Steel ingots in corners, Glass in the middle
    ], {
        S: 'thermal:steel_ingot', // Steel ingots from Thermal
        G: 'minecraft:glass',      // Glass blocks
        C: 'pneumaticcraft:compressed_iron_gear' // Compressed Iron Gear from PneumaticCraft
    }).id('kubejs:steel_casing'); // Unique recipe ID
});
