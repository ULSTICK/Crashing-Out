ServerEvents.recipes(event => {

    const add_sieve = function (input, output, chance, mesh_tier, multip) {
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

    const soul_sand_results = {
        'minecraft:quartz': 0.4,
        'minecraft:nether_wart': 0.05,
        'minecraft:bone_meal': 0.5,
        'minecraft:ghast_tear': 0.03,
        'exdeorum:cobalt_ore_chunk': 0.02,
        'mekanism:dirty_netherite_scrap': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(soul_sand_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
            add_sieve('minecraft:soul_sand', output, chance, mesh_tier, multip);
        }
    }

});
