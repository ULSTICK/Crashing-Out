ServerEvents.recipes(event => {
    // Pressure Chamber Recipe
    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            { item: 'minecraft:wheat_seeds' } // Input item
        ],
        pressure: 1.2, // Required pressure in bar
        results: [
            {
                item: 'pneumaticcraft:plastic', // Output item
                count: 1 // Number of items produced
            }
        ]
    }).id('kubejs:plastic_recipe'); // Updated ID for clarity
});
