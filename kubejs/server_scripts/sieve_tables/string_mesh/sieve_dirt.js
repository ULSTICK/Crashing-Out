ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance){
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": input
            },
            "mesh": "exdeorum:string_mesh",
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": chance
            }
        });
    };

    // ========= dust =========

    const dirt_results = {
        'exdeorum:stone_pebble': 3.66,
        'pamhc2crops:riceseeditem':0.07,
        'exdeorum:grass_seeds':0.07,
        'pamhc2crops:grapeseeditem':0.03,
        'pamhc2foodcore:sunflowerseedsitem':0.03,
        'minecraft:sugar_cane':0.03,
        'pamhc2crops:tomatoseeditem':0.02,
        'pamhc2crops:peanutseeditem':0.02,
        'pamhc2crops:soybeanseeditem':0.01,
        'minecraft:birch_sapling':0.01,
        'minecraft:oak_sapling':0.02,
        'minecraft:spruce_sapling':0.01
    };

    for (const [output, chance] of Object.entries(dirt_results)) {
        add_sieve('minecraft:dirt', output, chance);
    }
    
});
