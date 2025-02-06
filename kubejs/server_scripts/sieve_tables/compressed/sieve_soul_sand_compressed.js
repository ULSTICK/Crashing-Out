ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance, mesh_tier, multip){
        event.custom({
            "type": "exdeorum:compressed_sieve",
            "ingredient": {
                "item": input
            },
            "mesh": mesh_tier,
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 3.0,
                "p": chance * multip
            }
        });
    };

    // ========= dust =========

    const soul_sand_results = {
        'minecraft:quartz': 1,
        'minecraft:nether_wart': 0.05,
        'minecraft:ghast_tear': 0.02,
        'exdeorum:cobalt_ore_chunk': 0.01,
        'mekanism:dirty_netherite_scrap': 0.02
    };

    const mesh = {
        'exdeorum:string_mesh': 2,
        'exdeorum:flint_mesh': 2.2,
        'exdeorum:iron_mesh': 2.4,
        'exdeorum:golden_mesh': 2.6,
        'exdeorum:diamond_mesh': 2.8,
        'exdeorum:netherite_mesh': 3.0
    };

    for (const [output, chance] of Object.entries(soul_sand_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
        add_sieve('exdeorum:compressed_soul_sand', output, chance, mesh_tier, multip);
        }
    }
    
});
