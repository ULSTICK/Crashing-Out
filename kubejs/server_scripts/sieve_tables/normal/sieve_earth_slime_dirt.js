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

    const podzol_results = {
        'tconstruct:earth_slime_sapling': 0.04,
        'minecraft:slime_ball': 0.04,
        'tconstruct:earth_slime_grass_seeds': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(podzol_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
            add_sieve('minecraft:podzol', output, chance, mesh_tier, multip);
        }
    }

});
