ServerEvents.recipes(event => {

    const add_sieve = function (input, output, chance, mesh_tier, multip) {
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

    const crushed_deepslate_results = {
        'exdeorum:deepslate_pebble': 0.25,
        'exdeorum:stone_pebble': 0.25,
        'exdeorum:diorite_pebble': 0.25,
        'exdeorum:granite_pebble': 0.25,
        'exdeorum:andesite_pebble': 0.25,
        'exdeorum:deepslate_pebble': 0.25,
        'exdeorum:tuff_pebble': 0.25,
        'exdeorum:calcite_pebble': 0.25,
        'minecraft:flint': 0.25,
        'exdeorum:iron_ore_chunk': 0.25,
        'exdeorum:copper_ore_chunk': 0.14,
        'exdeorum:gold_ore_chunk': 0.09,
        'exdeorum:silver_ore_chunk': 0.09,
        'exdeorum:lead_ore_chunk': 0.11,
        'exdeorum:nickel_ore_chunk': 0.09,
        'exdeorum:uranium_ore_chunk': 0.02,
        'exdeorum:osmium_ore_chunk': 0.09,
        'exdeorum:tin_ore_chunk': 0.14,
        'exdeorum:zinc_ore_chunk': 0.09,
        'minecraft:lapis_lazuli': 0.05,
        'minecraft:coal': 0.13,
        'minecraft:diamond': 0.01,
        'minecraft:emerald': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 2,
        'exdeorum:flint_mesh': 2.2,
        'exdeorum:iron_mesh': 2.4,
        'exdeorum:golden_mesh': 2.6,
        'exdeorum:diamond_mesh': 2.8,
        'exdeorum:netherite_mesh': 3.0
    };

    for (const [output, chance] of Object.entries(crushed_deepslate_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
            add_sieve('exdeorum:compressed_crushed_deepslate', output, chance, mesh_tier, multip);
        }
    }

});
