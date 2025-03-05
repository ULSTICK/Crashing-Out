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

    const dust_results = {
        'pamhc2foodcore:saltitem': 0.2,
        'exdeorum:stone_pebble': 0.2,
        'minecraft:bone_meal': 0.2,
        'exdeorum:iron_ore_chunk': 0.08,
        'ae2:certus_quartz_dust': 0.17,
        'minecraft:redstone': 0.13,
        'exdeorum:copper_ore_chunk': 0.02,
        'exdeorum:tin_ore_chunk': 0.02,
        'exdeorum:lead_ore_chunk': 0.02,
        'exdeorum:silver_ore_chunk': 0.02,
        'minecraft:gunpowder': 0.07,
        'exdeorum:gold_ore_chunk': 0.03,
        'minecraft:glowstone_dust': 0.06,
        'minecraft:blaze_powder': 0.05,
        'minecraft:egg': 0.01,
        'minecraft:cod': 0.01,
        'exdeorum:uranium_ore_chunk': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(dust_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
        add_sieve('exdeorum:dust', output, chance, mesh_tier, multip);
        }
    }
    
});
