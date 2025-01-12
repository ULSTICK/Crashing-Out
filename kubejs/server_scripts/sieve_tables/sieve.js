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

    const dust_results = {
        'pamhc2foodcore:saltitem': 0.2,
        'exdeorum:stone_pebble': 0.2,
        'minecraft:bone_meal': 0.2,
        'exdeorum:iron_ore_chunk': 0.17,
        'ae2:certus_quartz_dust': 0.17,
        'minecraft:redstone': 0.13,
        'exdeorum:copper_ore_chunk': 0.08,
        'exdeorum:tin_ore_chunk': 0.08,
        'exdeorum:lead_ore_chunk': 0.08,
        'exdeorum:silver_ore_chunk': 0.08,
        'thermal:nickel_dust': 0.08,
        'minecraft:gunpowder': 0.07,
        'exdeorum:gold_ore_chunk': 0.07,
        'minecraft:glowstone_dust': 0.06,
        'minecraft:blaze_powder': 0.05,
        'minecraft:egg': 0.01,
        'minecraft:cod': 0.01,
    };

    for (const [output, chance] of Object.entries(dust_results)) {
        add_sieve('exdeorum:dust', output, chance);
    }
    
});
