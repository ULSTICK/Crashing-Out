ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance, mesh_tier, multip){
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": input
            },
            "mesh": mesh_tier,
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": chance * multip
            }
        });
    };

    // ========= dust =========

    const crushed_netherrack_results = {
        'exdeorum:cobalt_ore_chunk': 0.02,
        'mekanism:dirty_netherite_scrap': 0.04,
        'exdeorum:blackstone_pebble': 0.2,
        'exdeorum:basalt_pebble': 0.2,
        'tconstruct:blood_slime_sapling': 0.2,
		'tconstruct:ichor_slime_ball': 0.01,
		'tconstruct:blood_slime_grass_seeds': 0.01,
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(crushed_netherrack_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
        add_sieve('exdeorum:crushed_netherrack', output, chance, mesh_tier, multip);
        }
    }
    
});
