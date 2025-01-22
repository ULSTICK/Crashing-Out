ServerEvents.recipes(event => {
    // Crafting recipe: Ad Astra Fuel Refinery
    event.shaped('ad_astra:fuel_refinery', [
        'CFC', // Top row: Compressed Iron Ingot in all slots
        'IBM', // Middle row: Copper Block, Compressed Iron Block, Emerald Block
        'CTC'  // Bottom row: Compressed Iron Ingot in all slots
    ], {
        C: 'pneumaticcraft:ingot_iron_compressed', // Compressed Iron Ingot
        I: 'minecraft:copper_block',// Copper Block
        B: 'mekanism:steel_casing', // Stell casing block
        M: 'minecraft:emerald_block',// Emerald Block
        T: 'thermal:dynamo_stirling',// Stirling dynamo
        F: 'thermal:energy_cell_frame'// cell frame
    }).id('kubejs:fuel_refinery'); // Unique recipe ID
});
