ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance){
        event.custom({
            "type": "exdeorum:compressed_sieve",
            "ingredient": {
                "item": input
            },
            "mesh": "exdeorum:string_mesh",
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 3.0,
                "p": chance
            }
        });
    };

    // ========= dust =========

    const crushed_netherrack_results = {
        'exdeorum:cobalt_ore_chunk': 0.02,
        'mekanism:dirty_netherite_scrap': 0.04,
        'exdeorum:blackstone_pebble': 0.2,
        'exdeorum:basalt_pebble': 0.2
    };

    for (const [output, chance] of Object.entries(crushed_netherrack_results)) {
        add_sieve('exdeorum:compressed_crushed_netherrack', output, chance);
    }
    
});
